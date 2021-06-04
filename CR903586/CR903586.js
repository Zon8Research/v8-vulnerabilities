var valueA, observationA;
(function () {
  valueA = {};
  observationA = internals.observeGC(valueA);
})();
gc();
shouldBeFalse('observationA.wasCollected');
valueA = null;
observationA = null;
// On the next GC both, valueA and observationA die, which means that the first round callback in GCObservation will hit an already poisoned memory area as the GCObservation itself dies.
gc(); // ASAN CRASH