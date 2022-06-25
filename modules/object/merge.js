import push from "../../utils/push";

const merge = (object, sources) => {
  for(const key of Object.keys(sources)) {
    if(sources[key] instanceof Object) Object.assign(sources[key], merge(object[key], sources[key]));
  }
  Object.assign(object, sources)
  return object;
}

export default merge;