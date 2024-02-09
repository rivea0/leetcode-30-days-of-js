/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};
  return function (...args) {
    let keyArgs = JSON.stringify(args);
    if (keyArgs in cache) {
      return cache[keyArgs];
    }

    cache[keyArgs] = fn(...args);
    return cache[keyArgs];
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
