/**
 * Function takes array as parameter and returns it's length
 * @param {Array} array
 * @returns {number} length of the array
 */
const length = (array) => {
  let l = 0;
  for (const element of array) l += 1;
  return l;
};
export default length;
