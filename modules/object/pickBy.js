import length from '../../utils/length';
/**
 * Creates an object composed of the object properties predicate returns truthy for.
 * The predicate is invoked with two arguments: (value, key).
 * @param {Object} object The source object.
 * @param {Function} predicate The function invoked per property.
 * @returns Returns the new object.
 */
const pickBy = (object, predicate) => {
  let result = {};
  const entries = Object.entries(object);
  const entriesLength = length(entries);
  for (let i = 0; i < entriesLength; i += 1) {
    const key = entries[i][0];
    const value = entries[i][1];
    if (predicate(value)) result = { ...result, [key]: value };
  }
  return result;
};
export default pickBy;
