import length from '../../utils/length';
import getEntries from '../../utils/entries';
/**
 * The opposite of _.pickBy;
 * this method creates an object composed of the own and inherited enumerable string keyed
 * properties of object that predicate doesn't return truthy for.
 * The predicate is invoked with two arguments: (value, key).
 * @param {Object} object The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns Returns the new object.
 */
const omitBy = (object, predicate) => {
  let result = {};
  const entries = getEntries(object);
  const entriesLength = length(entries);
  for (let i = 0; i < entriesLength; i += 1) {
    const key = entries[i][0];
    const value = entries[i][1];
    if (!predicate(value)) result = { ...result, [key]: value };
  }
  return result;
};

export default omitBy;
