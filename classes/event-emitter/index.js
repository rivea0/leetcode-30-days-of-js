class EventEmitter {
  eventCallbacks = {};
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!(eventName in this.eventCallbacks)) {
      this.eventCallbacks[eventName] = [callback];
    } else {
      this.eventCallbacks[eventName].push(callback);
    }

    return {
      unsubscribe: () => {
        this.eventCallbacks[eventName] = this.eventCallbacks[eventName].filter(
          (cb) => cb !== callback
        );
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    let results = [];
    if (eventName in this.eventCallbacks) {
      for (let cb of this.eventCallbacks[eventName]) {
        results.push(cb(...args));
      }
    }

    return results;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
