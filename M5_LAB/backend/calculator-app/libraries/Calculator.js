//https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29

const Logger = require('./Logger');
class Calculator {
    
    constructor() {
    //   this.id = Date.now();
    this.id = this.#createRandomId(); // Generate a random ID
    this.logger = new Logger(); // Create a logger instance
    }
    // #log = (value) => {
    //   console.log(`[Calculator :${this.id}]:${value}`);
    // };

    #createRandomId = () => {
        // Generate a random integer between 1 and 1,000,000
        return Math.floor(Math.random() * 10_000) + 1;
    };
    add(num1, num2) {
      const value = num1 + num2;
      this.logger.log(this.id, `Add ${num1} and ${num2}`, value);
      return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2;
        this.logger.log(this.id, `Subtract ${num1} and ${num2}`, value);
        return value;
      }

      multiply(num1, num2) {
        const value = num1 * num2;
        this.logger.log(this.id, `Multiply ${num1} and ${num2}`, value);
        return value;
      }

      divide(num1, num2) {
        const value = num1 / num2;
        this.logger.log(this.id, `Divide ${num1} and ${num2}`, value);
        return value;
      }
  }
  module.exports = Calculator;