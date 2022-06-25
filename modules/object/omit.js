import length from "../../utils/length";

const omit = (object, keys) => {
    const arrayLength = length(keys);
    const result = {...object};
    for(let i = 0; i < arrayLength; i++) {
        const temp = keys[i];
        delete result[temp];
    }
    return result;
}
export default omit;