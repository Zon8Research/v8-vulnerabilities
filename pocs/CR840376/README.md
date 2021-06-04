When we moved WebAssembly code off-heap, we accidentally removed the retpoline used for indirect calls. The switch happened in https://crrev.com/c/856999 (January 2018, M65).

We will need to add it back, and merge that to M67 and possibly M66.