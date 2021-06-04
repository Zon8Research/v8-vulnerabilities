
function KeyedStoreIC(a) { a[0] = Math.E; }

// literal with a fast double elements backing store
var literal = [1.2];

// specialize the IC for fast double elements
KeyedStoreIC(literal);
KeyedStoreIC(literal);

// truncate js array to 0 elements:
//   backing store will be replaces with empty fixed array
literal.length = 0;

// ArrayPush built-in will replace empty fixed array backing
// store with 19 elements fixed array backing store.
// Leading to a mismatch between the map and the backing store.
// Debug mode will crash here in set_elements accessor. 
literal.push(Math.E, Math.E);

// Corrupt the backing store!
KeyedStoreIC(literal);

// Release mode will crash here when trying to visit parts of E as pointers.
gc();
