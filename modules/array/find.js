import length from "../../utils/length";
const find = (collection, predicate, fromIndex = 0) => {
  const collectionLength = length(collection);
  let found = undefined;
  for(let i = fromIndex; i < collectionLength; i += 1) {
    if(predicate(collection[i], i, collection)) {
        found = collection[i];
        break;
    }
  }
  return found ? [found] : found;
}

export default find;