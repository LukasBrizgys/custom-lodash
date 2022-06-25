import merge from "../modules/object/merge";
const object = {
    'a': [{'b': 2}, {'d': 4}]
}
const other = {
    'a': [{'c': 3}, {'e': 5}]
}
test('test function merge', () => {
    expect(merge(object, other)).toStrictEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] })
})


