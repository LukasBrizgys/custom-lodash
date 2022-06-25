import pick from "../modules/object/pick";

const object = { 'a': 1, 'b': '2', 'c': 3};
test('test of function pick', () => {
   expect(pick(object, ['a', 'c'])).toStrictEqual({'a': 1, 'c': 3});
});
