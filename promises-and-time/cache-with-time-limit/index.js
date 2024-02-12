var TimeLimitedCache = function () {
  this.keys = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const result = this.keys.get(key);
  if (result) {
    clearTimeout(result.timerId);
  }

  let timerId = setTimeout(() => this.keys.delete(key), duration);
  this.keys.set(key, { value, timerId });

  return !!result;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.keys.has(key)) {
    return this.keys.get(key).value;
  }

  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.keys.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
