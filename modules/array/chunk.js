import length from '../../utils/length';
import slice from '../../utils/slice';
import push from '../../utils/push';
/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @param {Array} array The array to process
 * @param {Number} size The length of each chunk
 * @returns Return the new array of chunks
 */
const chunk = (array, size = 1) => {
  const arrayLength = array == null ? 0 : length(array);
  if (!arrayLength || size < 1) {
    return [];
  }
  let result = [];
  for (let i = 0; i < arrayLength; i += size) {
    if (arrayLength % size !== 0 && i === arrayLength - 1) {
      result = push(result, [array[arrayLength - 1]]);
      break;
    }
    result = push(result, slice(array, i, i + size));
  }
  return result;
};
export default chunk;
