import length from '../../utils/length';
import push from '../../utils/push';
/**
 * Function takes array as parameter and returns array without falsy values
 * @param {Array} array the array to compact
 * @returns {Array} array without falsy values
 */
const compact = (array) => {
  let result = [];
  const arrayLength = array == null ? 0 : length(array);
  for (let i = 0; i < arrayLength; i += 1) {
    if (array[i]) {
      result = push(result, array[i]);
    }
  }
  return result;
};

export default compact;
