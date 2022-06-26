import length from '../../utils/length';
import push from '../../utils/push';

/**
 * Creates an array of values by running each element in collection thru iteratee.
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns Returns the new mapped array.
 */
const map = (collection, iteratee = (n) => n) => {
  const array = collection instanceof Array ? collection : Object.values(collection);
  const arrayLength = length(array);
  let result = [];

  for (let i = 0; i < arrayLength; i += 1) {
    const value = iteratee(array[i], i, array);

    result = push(result, value);
  }
  return result;
};

export default map;
