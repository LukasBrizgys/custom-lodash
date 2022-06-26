import length from '../../utils/length';
/**
 * Creates an object composed of the picked object properties.
 * @param {Object} object The source object.
 * @param {string} paths The property paths to pick.
 * @returns Returns the new object.
 */
const pick = (object, paths) => {
  let result = {};
  const arrayLength = length(paths);
  for (let i = 0; i < arrayLength; i += 1) {
    const temp = paths[i];
    result = { ...result, [temp]: object[temp] };
  }
  return result;
};

export default pick;
