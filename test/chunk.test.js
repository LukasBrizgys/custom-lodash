import chunk from "../modules/array/chunk";
test('array [1, 2, 3, 4, 5] is chunked into [[1, 2], [3, 4], [5]]', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
});

test('array [1, 2, 3, 4, 5, 6] is chunked into [[1, 2], [3, 4], [5, 6]]', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([[1, 2], [3, 4], [5, 6]]);
});

test('chunk empty params', () => {
    expect(chunk()).toStrictEqual([]);
});

test('chunk empty array', () => {
    expect(chunk([], 5)).toStrictEqual([]);
});

test('chunk with size=0', () => {
    expect(chunk([1, 2, 3, 4, 5], 0)).toStrictEqual([]);
});

test('chunk with default value', () => {
    expect(chunk([1, 2, 3, 4, 5])).toStrictEqual([[1], [2], [3], [4], [5]]);
});