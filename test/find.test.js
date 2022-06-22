import find from "../modules/array/find";
const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];

test('test of "find" function', () => {
    expect(find(users, (o) => { return o.age < 40; })).toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
});

test('test of "find" function', () => {
    expect(find(users, (o) => { return o.age < 40; }, 1)).toStrictEqual([{ 'user': 'pebbles', 'age': 1, 'active': true }]);
});

test('test of "find" function', () => {
    expect(find(users, (o) => { return o.age > 40; }, 1)).toBeUndefined();
});
