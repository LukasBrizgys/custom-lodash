import length from '../../utils/length';
import push from '../../utils/push';

/**
 * Iterates over elements of collection,
 * returning an array of all elements predicate returns truthy for.
 * @param {Array} array The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns Returns the new filtered array.
 */
const filter = (array, predicate) => {
  const arrayLength = length(array);
  let result = [];
  for (let i = 0; i < arrayLength; i += 1) {
    if (predicate(array[i], i, array)) {
      result = push(result, array[i]);
    }
  }
  return result;
};
export default filter;
