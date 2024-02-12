/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise(async (resolve, reject) => {
    let values = new Array(functions.length).fill(null);
    let count = 0;
    functions.forEach(async (fn, i) => {
      try {
        const result = await fn();
        values[i] = result;
        ++count;
        if (count === functions.length) resolve(values);
      } catch (error) {
        reject(error);
      }
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
