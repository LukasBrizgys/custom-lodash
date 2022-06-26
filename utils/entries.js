import push from './push';

/**
 * Function takes object as parameter,
 * iterates through object and returns key/value pairs in an array
 * @param {Object} object Object to iterate
 * @returns
 */
const getEntries = (object) => {
  let result = [];
  for (const key in object) {
    result = push(result, [key, object[key]]);
  }
  return result;
};
export default getEntries;
