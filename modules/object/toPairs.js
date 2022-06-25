import length from "../../utils/length";
import push from "../../utils/push";
const toPairs = (object) => {
  const keys = Object.keys(object);
  const keysLength = length(keys);
  let result = [];
  for(let i = 0; i < keysLength; i += 1) {
    result = push(result, [keys[i], object[keys[i]]]);
  }
  return result
}
export default toPairs;