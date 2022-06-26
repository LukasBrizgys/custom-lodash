import slice from '../../utils/slice';
/**
 * Function takes array and number of elements as a parameters,
 * elements are taken from the beginning of array
 * and put into new array
 * @param {Array} array array to take beginning from
 * @param {number} n number of elements to take from beginning
 * @returns {Array} array with elements taken from the beginning
 */
const take = (array, n = 1) => {
  const newArray = slice(array, 0, n);
  return newArray;
};

export default take;
