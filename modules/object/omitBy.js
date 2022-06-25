const omitBy = (object, predicate) => {
    let result = {};
    for(const [key, value] of Object.entries(object)) {
        if(!predicate(value)) result = { ...result, [key]: value };
    }
    return result;
}

export default omitBy;