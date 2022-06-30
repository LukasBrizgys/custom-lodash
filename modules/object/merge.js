import length from '../../utils/length';
import getKeys from '../../utils/keys';
/**
 * it recursively merges own and inherited enumerable string keyed
 * properties of source objects into the destination object.
 * Source properties that resolve to undefined are skipped if a destination value exists.
 * Array and plain object properties are merged recursively.
 * Other objects and value types are overridden by assignment.
 * Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 * @param {Object} object The destination object.
 * @param {...Object} source The source objects.
 * @returns Returns object.
 */
const merge = (object, source) => {
    const keys = getKeys(source);
    const keysLength = length(keys);
    for(let i = 0; i < keysLength; i += 1) {
      const sourceValue = source[keys[i]];
      const objectValue = object[keys[i]];
      if(typeof sourceValue == 'object' && typeof objectValue === 'object') {
        object[keys[i]] = merge(objectValue, sourceValue);
      }else{
        object[keys[i]] = sourceValue;
      }
    }
    
  return object;
};

export default merge;
