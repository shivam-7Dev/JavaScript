/**
 * setTimeout and setInterval are traditional methods Javascript hav aavailable for running code asynchronously
 * after a set time period elapsed or
 * at regular intervals of time
 */

/**
 * setTimeout is a method in JavaScript that allows you to schedule the execution of a function or a piece of code
 * after a specified delay in milliseconds. It is commonly used for implementing delays, timeouts, or executing code
 * asynchronously.
 *
 * @param {function} callback - The function or code to be executed after the delay.
 * @param {number} delay - The delay in milliseconds before the code execution.
 * @param {...any} [args] - Optional arguments to be passed to the callback function.
 * @returns {number} - A unique identifier for the timeout that can be used to cancel it using clearTimeout().
 *
 * @example
 * // Execute a function after a delay of 2 seconds
 * setTimeout(() => {
 *   console.log('Delayed function executed!');
 * }, 2000);
 *
 * @example
 * // Execute a function with arguments after a delay of 1 second
 * setTimeout((arg1, arg2) => {
 *   console.log(`Delayed function executed with arguments: ${arg1} and ${arg2}`);
 * }, 1000, 'Hello', 'World');
 */

const timeoutId = setTimeout(() => {}, 1000, 1, 2, 3);
// if you want that the call back function should not execute the use the clearInterval method
clearInterval(timeoutId);

setTimeout(
  (name) => {
    console.log(`hello ${name} from setTimeout `);
  },
  2000,
  "Shivam"
);

setTimeout(
  (arg1, arg2) => {
    console.log(
      `Delayed function executed with arguments: ${arg1} and ${arg2}`
    );
  },
  1000,
  "Hello",
  "World"
);

/**
 * setInterval is a method in JavaScript that allows you to repeatedly execute a function or a piece of code
 * at a specified interval in milliseconds. It is commonly used for implementing timers, animations, or any task
 * that needs to be executed repeatedly.
 *
 * @param {function} callback - The function or code to be executed at each interval.
 * @param {number} delay - The delay in milliseconds between each execution of the code.
 * @param {...any} [args] - Optional arguments to be passed to the callback function.
 * @returns {number} - A unique identifier for the interval that can be used to cancel it using clearInterval().
 *
 * @example
 * // Execute a function every 1 second
 * setInterval(() => {
 *   console.log('Repeated function executed!');
 * }, 1000);
 *
 * @example
 * // Execute a function with arguments every 2 seconds
 * setInterval((arg1, arg2) => {
 *   console.log(`Repeated function executed with arguments: ${arg1} and ${arg2}`);
 * }, 2000, 'Hello', 'World');
 */

const id1 = setInterval(() => {
  console.log("Repeated function executed!");
}, 1000);
const id2 = setInterval(
  (arg1, arg2) => {
    console.log(
      `Repeated function executed with arguments: ${arg1} and ${arg2}`
    );
  },
  1000,
  "Hello",
  "World"
);

//clearing these intervals after 10 seconds
setTimeout(() => {
  console.log("clearing the intervals");
  clearInterval(id1);
  clearInterval(id2);
}, 10000);

/**
 * Recursive setTimeout is a technique in JavaScript that allows you to repeatedly execute a function or a piece of code
 * at a specified interval using setTimeout. It is commonly used when you want to create a delay between each execution
 * and perform some action recursively.
 *
 * @param {function} callback - The function or code to be executed at each interval.
 * @param {number} delay - The delay in milliseconds between each execution of the code.
 * @param {...any} [args] - Optional arguments to be passed to the callback function.
 * @returns {number} - A unique identifier for the timeout that can be used to cancel it using clearTimeout().
 *
 * @example
 * // Execute a function recursively every 1 second
 * function recursiveTimeout(count) {
 *   console.log(`Recursive function executed! Count: ${count}`);
 *   if (count < 5) {
 *     setTimeout(() => {
 *       recursiveTimeout(count + 1);
 *     }, 1000);
 *   }
 * }
 *
 * recursiveTimeout(0);
 */

function recursiveTimeout(count) {
  console.log(`Recursive function executed! Count: ${count}`);
  if (count < 5) {
    setTimeout(() => {
      recursiveTimeout(count + 1);
    }, 1000);
  }
}

recursiveTimeout(0);
