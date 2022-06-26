import slice from '../../utils/slice';
import length from '../../utils/length';

/**
 *
 * @param {Array} array array to drop values from
 * @param {number} n number of elements to drop from the beginning
 * @returns {Array} new array with remaining elements
 */
const drop = (array, n = 1) => {
  const arrayLength = array == null ? 0 : length(array);
  if (!arrayLength) return [];
  const newArray = slice(array, n < 0 ? 0 : n, arrayLength);
  return newArray;
};

export default drop;
