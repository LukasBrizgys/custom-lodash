import push from "./push";
const slice = (array, start, end) => {
    let result = [];
    for(let i = start; i < end; i++) result = push(result, array[i]);
    return result;
}

export default slice;