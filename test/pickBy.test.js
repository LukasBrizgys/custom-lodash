import pickBy from "../modules/object/pickBy";
const object = { 'a': 1, 'b': '2', 'c': 3};

const isNumberFinite = (value) => {
    if(Number.isFinite(value)) return true;
    return false;
}

test('test of pickBy function', () => {
    expect(pickBy(object, isNumberFinite)).toStrictEqual({'a': 1, 'c': 3});
})