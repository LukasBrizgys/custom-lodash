import toPairs from "../modules/object/toPairs";
const object = {'a': 1, 'b': 2};
test('test of function toPairs', () => {
    expect(toPairs(object)).toStrictEqual([['a',1], ['b', 2]]);
})