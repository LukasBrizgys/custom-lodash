import includes from "../modules/array/includes";

test('test of includes function', () => {
    expect(includes([1, 2, 3], 1)).toStrictEqual(true);
});

test('test of includes function', () => {
    expect(includes([1, 2, 3], 1, 2)).toStrictEqual(false);
});

test('test of includes function', () => {
    expect(includes('abcd', 'bc')).toStrictEqual(true);
})

test('test of includes function', () => {
    expect(includes('abcd', 'bc', -1)).toStrictEqual(false);
})