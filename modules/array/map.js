import length from "../../utils/length";
import push from "../../utils/push";

const map = (collection, iteratee = (n) => n) => {
  let array = collection instanceof Array ? collection : Object.values(collection);
  const arrayLength = length(array);
  let result = [];
  
  for(let i = 0; i < arrayLength; i += 1) {
    const value = iteratee(array[i], i, array);

    result = push(result, value);
  }
  return result;
}

export default map;