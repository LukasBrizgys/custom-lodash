import length from '../../utils/length';
import push from '../../utils/push';
/**
 * Creates an array of grouped elements,
 * the first of which contains the first elements of the given arrays,
 * the second of which contains the second elements of the given arrays,
 * and so on.
 * @param  {...Array} arrays The arrays to process.
 * @returns Returns the new array of grouped elements.
 */
const zip = (...arrays) => {
  const mainArrayLength = length(arrays);
  const innerArrayLength = length(arrays[0]);

  const result = [];
  for (let i = 0; i < mainArrayLength; i += 1) {
    const innerArray = arrays[i];
    for (let j = 0; j < innerArrayLength; j += 1) {
      if (!result[j]) result[j] = [];
      result[j] = push(result[j], innerArray[j]);
    }
  }
  return result;
};

export default zip;
