import omit from "../modules/object/omit";

const object = { 'a': 1, 'b': '2', 'c': 3 };
test('test of function omit', () => {
    expect(omit(object, ['a', 'c'])).toStrictEqual({'b': '2'});
})