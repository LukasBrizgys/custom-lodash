import take from '../modules/array/take';
test('test of take function', () => {
    expect(take([1, 2, 3, 4, 5])).toStrictEqual([1]);
});

test('test of take function', () => {
    expect(take([1, 2, 3, 4, 5], 0)).toStrictEqual([]);
});

test('test of take function', () => {
    expect(take([1, 2, 3, 4, 5], 2)).toStrictEqual([1, 2]);
});