import length from "../../utils/length";

const pick = (object, paths) => {
    let result = {};
    const arrayLength = length(paths);
    for(let i = 0; i < arrayLength; i += 1) {
        const temp = paths[i];
        result = { ...result, [temp]: object[temp]}
    }
    return result;

}

export default pick;