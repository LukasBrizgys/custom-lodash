import filter from "../modules/array/filter";
const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

test('test of "filter" function', () => {
    expect(filter(users, (o) => { return !o.active; })).toStrictEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
});