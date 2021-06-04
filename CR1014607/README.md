Filing this with the security template out of caution since I don't know how this code is used, though it may just be fine on accident.

I thought I'd dust off https://chromium-review.googlesource.com/c/chromium/src/+/1234994 and see what the new blockers were and ran into an issue in V8. Generating the snapshot fails with:

../../buildtools/third_party/libc++/trunk/include/vector:1547: _LIBCPP_ASSERT '__n < size()' failed. vector[] index out of bounds

The issue is this line here, called by LinearScanAllocator::AllocateRegisters(). It's writing to spill_state_[0] but the vector is empty.
https://cs.chromium.org/chromium/src/v8/src/compiler/backend/register-allocator.h?rcl=65c6e8ed2deaa6ba53ec00ef85a0fa9e21b7f2bc&l=330

Skimming the code, spill_state_ is never resized after creation except in ResetSpillState(), called at the top of AllocateRegisters().
https://cs.chromium.org/chromium/src/v8/src/compiler/backend/register-allocator.h?rcl=65c6e8ed2deaa6ba53ec00ef85a0fa9e21b7f2bc&l=338
https://cs.chromium.org/chromium/src/v8/src/compiler/backend/register-allocator.cc?rcl=65c6e8ed2deaa6ba53ec00ef85a0fa9e21b7f2bc&l=3643

That's calling clear() on the vector, which shrinks the vector down to size size. The function then goes and writes to the vector. I suspect the code meant to clear each individual component of the vector, not clear the outer vector itself. Fortunately, std::vector seems to not deallocate the buffer, so the immediate write is (probably?) okay. However, since the vector contains vectors themselves, we end up destructing the elements of spill_state_ and then calling operator= on the destructed vectors, which seems also precarious.

I think the fix is to replace ResetSpillState() with:

    for (auto& state : spill_state_) {
      state.clear();
    }

but someone who actually works on V8 should probably confirm this. This code seems to date to https://chromium-review.googlesource.com/c/1426129, but herhut@ seems to no longer be on the project, so assigning to sigurds@ to take a look.