/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let result = [];
  if (n === 0) {
    return arr;
  }

  for (let item of arr) {
    if (Array.isArray(item) && n >= 1) {
      flat(item, n - 1).forEach((i) => result.push(i));
    } else {
      result.push(item);
    }
  }

  return result;
};
