const array = [10, 20, 30, 40, 50];

const arrayCopy1 = [];
for (const value of array) {
  arrayCopy1.push(value);
}
arrayCopy1.push(60);
arrayCopy1.push(70);
arrayCopy1.push(80);

console.log(array);
console.log(arrayCopy1);

const arrayCopy2 = [10, 20, ...array, 60, 70, 80];
console.log(arrayCopy2);

/**
 * The spread operator, often denoted by three dots (...), is   feature  that allows you to expand an iterable (like an array) into individual elements.
 * It's a concise and versatile tool used in various contexts, such as function calls, array literals, and object literals.
 */

//Spread for Copying Arrays:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

//Spread in Function Calls:
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // Output: 6

// Spread for Concatenating Arrays:
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const combinedArray = [...arr3, ...arr4];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//Spread with Objects (ES9 and later):
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj); // Output: { x: 1, y: 2, z: 3 }

//Spread in Function Parameters (Rest Parameters):
function myFunction(...args) {
  console.log(args);
}

myFunction(1, 2, 3); // Output: [1, 2, 3]

// Spread for Strings:
const str = "hello";
const strArray = [...str];

console.log(strArray); // Output: ['h', 'e', 'l', 'l', 'o']
