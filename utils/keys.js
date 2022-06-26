import push from './push';

/**
 * Function iterates through object and returns array of keys of that object
 * @param {Object} object Object to iterate for keys
 * @returns Array of keys
 */
const getKeys = (object) => {
  let result = [];
  for (const key in object) {
    result = push(result, key);
  }
  return result;
};
export default getKeys;
