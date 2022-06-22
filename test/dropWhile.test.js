import dropWhile from "../modules/array/dropWhile";

const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

test('test of "dropWhile" function', () => {
    expect(dropWhile(users, (o) => { return !o.active; })).toStrictEqual([{ 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false }]);
});

const users1 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

test('test of "dropWhile" function', () => {
    expect(dropWhile(users1, function (o) { return !o.active; })).toStrictEqual([]);
});