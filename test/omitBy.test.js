import omitBy from "../modules/object/omitBy"

const isNumber = (value) => {
    if(isNaN(value)) return false;
    return true;
}
const isNumberFinite = (value) => {
    if(Number.isFinite(value)) return true;
    return false;
}

const object = {'a': 1, 'b': '2', 'c': 3}
test('test for omitBy function', () => {
    expect(omitBy(object, isNumberFinite)).toStrictEqual({'b': '2'});
})

test('test for omitBy function', () => {
    expect(omitBy(object, isNumber)).toStrictEqual({});
})