import drop from '../modules/array/drop';

test('drop array [1, 2, 3, 4]', () => {
    expect(drop([1, 2, 3, 4],2)).toStrictEqual([3, 4]);
});

test('drop array [1, 2, 3, 4]', () => {
    expect(drop([1, 2, 3, 4],0)).toStrictEqual([1, 2, 3, 4]);
});
test('drop with no params', () => {
    expect(drop()).toStrictEqual([]);
});
test('drop array [1, 2, 3, 4] with default n', () => {
    expect(drop([1, 2, 3, 4])).toStrictEqual([2, 3, 4]);
});

test('drop array [1, 2, 3, 4]', () => {
    expect(drop([1, 2, 3, 4], -1)).toStrictEqual([1, 2, 3, 4]);
});