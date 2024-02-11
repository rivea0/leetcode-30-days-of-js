/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    let promise1 = new Promise((resolve, reject) => {
      setTimeout(reject, t, 'Time Limit Exceeded');
    });

    let promise2 = new Promise(async (resolve, reject) => {
      try {
        let result = await fn(...args);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });

    return Promise.race([promise1, promise2]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
