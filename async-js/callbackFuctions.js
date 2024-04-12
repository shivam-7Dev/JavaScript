// In JavaScript, functions are first-class objects.
// Just like an object, a function can be passed as an argument to another function.
// And a function can also be returned as a value from other functions.

// Example 1: Passing a function as an argument
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function sayHello(callback) {
  callback("John");
}

sayHello(greet); // Output: Hello, John!

// Example 2: Returning a function
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// Any function that is passed as an argument to another function is called a callback function in JavaScript.
// The function which accepts a function as an argument or returns a function is called a higher-order function.

// Example 3: Higher-order function accepting a callback
function calculate(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

console.log(calculate(add, 3, 4)); // Output: 7

// Need of callback?
// Synchronous callback: A callback which is executed immediately is called a synchronous callback.
// For example, a callback function passed to map, filter. The callback function implements the logic which the higher-order function needs to apply.

// Example 4: Synchronous callback
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Asynchronous callback: A callback that is often used to continue or resume code execution after an asynchronous operation has completed.
// Callbacks are used to delay the execution of a function until a particular time or event has occurred.

// Example 5: Asynchronous callback
function fetchData(callback) {
  setTimeout(function () {
    const data = "Some data";
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log(`Processing data: ${data}`);
}

fetchData(processData); // Output (after 2 seconds): Processing data: Some data
