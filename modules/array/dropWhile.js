import length from '../../utils/length';
import slice from '../../utils/slice';

/**
 * Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 * @param {Array} array The array to query
 * @param {Function} predicate function invoked per iteration
 * @returns
 */
const dropWhile = (collection, predicate) => {
  const collectionLength = length(collection);
  let index = 0;
  for (let i = 0; i < collectionLength; i += 1) {
    if (!predicate(collection[i], i, collection)) {
      index = i;
      break;
    }
  }
  return index === 0 ? [] : slice(collection, 0, index);
};

export default dropWhile;
