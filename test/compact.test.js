import compact from "../modules/array/compact";

test('compact array ["string", false, undefined, 0, 1, 2, 3]', () => {
    expect(compact(['string', false, undefined, 0, 1, 2, 3])).toStrictEqual(['string', 1, 2, 3]);
});

test('compact array []', () => {
    expect(compact()).toStrictEqual([]);
});

test('compact empty array', () => {
    expect(compact([])).toStrictEqual([]);
});

test('compact array ["some str", false, [], {}, null]', () => {
    expect(compact(["some str", false, [], {}, null])).toStrictEqual(["some str", [], {}]);
});