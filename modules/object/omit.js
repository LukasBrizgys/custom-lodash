import length from '../../utils/length';
/**
 * The opposite of _.pick;
 * this method creates an object composed of the own and inherited 
 * enumerable property paths of object that are not omitted.
 * @param {object} object The source object. 
 * @param {string|string[]} keys The property paths to omit. 
 * @returns Returns the new object.
 */
const omit = (object, keys) => {
  const arrayLength = length(keys);
  const result = { ...object };
  for (let i = 0; i < arrayLength; i += 1) {
    const temp = keys[i];
    delete result[temp];
  }
  return result;
};
export default omit;
