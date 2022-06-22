import length from "../../utils/length";
import push from "../../utils/push";
const filter = (array, predicate) => {
  const arrayLength = length(array);
  let result = [];
  for(let i = 0; i < arrayLength; i++) {
    if (predicate(array[i], i, array)) {
        result = push(result, array[i]);
    }
  }
  return result;
}
export default filter;