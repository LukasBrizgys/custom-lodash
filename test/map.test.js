import map from "../modules/array/map";

const users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];

const square = (n) => {
    return n * n;
}

test('test of "map" function', () => {
    expect(map([4, 8])).toStrictEqual([4, 8]);
});

test('test of "map" function', () => {
    expect(map([4, 8], square)).toStrictEqual([16, 64]);
});

test('test of "map" function', () => {
    expect(map({ 'a': 4, 'b': 8 }, square)).toStrictEqual([16, 64]);
});
