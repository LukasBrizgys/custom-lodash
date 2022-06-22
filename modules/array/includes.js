import length from "../../utils/length";

const includes = (collection, value, fromIndex = 0) => {
  const arrayLength = length(collection);
  let startIndex = fromIndex < 0 ? arrayLength + fromIndex : fromIndex;
  if(typeof collection === 'string') {
    const substringLength = length(value);
    for(let i = startIndex; i <= arrayLength - substringLength; i += 1) {
        let count = 0;
        for(let j = startIndex; j < substringLength; j += 1) {
            if (collection[i + j] == value[j]) count++;
            else break;
        }
        if (count === substringLength) return true;

    }
    return false;
  }

  for(let i = startIndex; i < arrayLength; i += 1) {
     if(collection[i] === value) return true;
  }
  return false;
}

export default includes;