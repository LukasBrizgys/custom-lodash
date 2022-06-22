import length from "../../utils/length";
import push from "../../utils/push";

const zip = (...arrays) => {
    const mainArrayLength = length(arrays);
    const innerArrayLength = length(arrays[0]);

    let result  = [];
    for(let i = 0; i < mainArrayLength; i += 1) {
        const innerArray = arrays[i]; 
        for(let j = 0; j < innerArrayLength; j += 1) {
            if(!result[j]) result[j] = [];
            result[j] = push(result[j], innerArray[j]);
            
        }
    }
    console.log(arrays);
    return result;
}

export default zip;