/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (!obj) return;
  if (typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
      let res = compactObject(obj[i]);
      if (res) {
        result.push(res);
      }
    }

    return result;
  }

  let result = {};

  for (let k in obj) {
    let res = compactObject(obj[k]);
    if (res) {
      result[k] = res;
    }
  }

  return result;
};
