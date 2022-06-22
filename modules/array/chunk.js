import length from "../../utils/length";
import slice from "../../utils/slice";
import push from "../../utils/push";
const chunk = (array, size) => {
  const arrayLength = array == null ? 0 : length(array);
  if (!arrayLength || size < 1) {
    return [];
  }
  if(!size) size = 1;
  let result = [];
  for(let i = 0; i < arrayLength; i += size){
    if(arrayLength % size !== 0 && i === arrayLength - 1) {
          result = push(result, [array[arrayLength - 1]])
          break;
        };
    result = push(result, slice(array, i, i + size))
  }
  return result;
}
export default chunk;