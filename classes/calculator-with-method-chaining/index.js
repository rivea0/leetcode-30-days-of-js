class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.n = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.n += value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.n -= value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.n *= value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }

    this.n /= value;

    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.n = this.n ** value;

    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.n;
  }
}
