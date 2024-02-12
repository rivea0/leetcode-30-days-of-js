/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let result = [];
  let start = 0;

  while (start < arr.length) {
    result.push(arr.slice(start, start + size));
    start += size;
  }

  return result;
};
