import length from '../../utils/length';

/**
 * Checks if value is in collection. If collection is a string,
 * it's checked for a substring of value,
 * otherwise SameValueZero is used for equality comparisons.
 * If fromIndex is negative,
 * it's used as the offset from the end of collection.
 * @param {Array|String} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {Number} fromIndex The index to search from.
 * @returns Returns true if value is found, else false.
 */
const includes = (collection, value, fromIndex = 0) => {
  const arrayLength = length(collection);
  const startIndex = fromIndex < 0 ? arrayLength + fromIndex : fromIndex;
  if (typeof collection === 'string') {
    const substringLength = length(value);
    for (let i = startIndex; i <= arrayLength - substringLength; i += 1) {
      let count = 0;
      for (let j = startIndex; j < substringLength; j += 1) {
        if (collection[i + j] === value[j]) count += 1;
        else break;
      }
      if (count === substringLength) return true;
    }
    return false;
  }

  for (let i = startIndex; i < arrayLength; i += 1) {
    if (collection[i] === value) return true;
  }
  return false;
};

export default includes;
