import length from '../../utils/length';
import push from '../../utils/push';
/**
 * Creates an array of own enumerable string keyed-value
 * pairs for object which can be consumed by _.fromPairs.
 * If object is a map or set, its entries are returned.
 * @param {Object} object
 * @returns Returns the key-value pairs.
 */
const toPairs = (object) => {
  const keys = Object.keys(object);
  const keysLength = length(keys);
  let result = [];
  for (let i = 0; i < keysLength; i += 1) {
    result = push(result, [keys[i], object[keys[i]]]);
  }
  return result;
};
export default toPairs;
