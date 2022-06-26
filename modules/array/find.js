import length from '../../utils/length';

/**
 * Iterates over elements of collection,
 * returning the first element predicate returns truthy for.
 * @param {Array} collection The collection to inspect
 * @param {Function} predicate The function invoked per iteration.
 * @param {Number} fromIndex The index to search from.
 * @returns Returns the matched element, else undefined.
 */
const find = (collection, predicate, fromIndex = 0) => {
  const collectionLength = length(collection);
  let found;
  for (let i = fromIndex; i < collectionLength; i += 1) {
    if (predicate(collection[i], i, collection)) {
      found = collection[i];
      break;
    }
  }
  return found ? [found] : found;
};

export default find;
