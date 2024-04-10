/**
  In JavaScript, the Set data structure is a collection of unique values where each value may only occur once.
  It was introduced in ECMAScript 6 (ES6) and provides a convenient way to store and manipulate unique elements.
*/

const mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);

console.log(mySet);

mySet.add(10);
mySet.add(10);
mySet.add(10);

console.log(mySet);

mySet.add("10");

console.log(mySet);

mySet.delete(20);
console.log(mySet);

console.log(mySet.has(30));
console.log(mySet.has(300));

console.log(mySet.size);

//Converting Set to Array:
const myArray = [...mySet];
// or
const myArray2 = Array.from(mySet);
