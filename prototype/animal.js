const animal = {
  type: "monkey",
  numLegs: 2,
};

console.log(animal);
console.log(animal.numLegs);
// console.log(animal.hello());
console.log(animal.toString());
console.log(animal.hasOwnProperty("type"));
console.log(animal.hasOwnProperty("hello"));
console.log(animal.hasOwnProperty("toString"));
console.log("-------");
console.log(Object.getOwnPropertyNames(animal));
console.log(Object.keys(animal));
console.log("-------");
console.log(Object.getPrototypeOf(animal));
console.log("-------");

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal)));
console.log(Object.keys(Object.getPrototypeOf(animal))); //[]
console.log("-------");

const myObject = {};
const myObject2 = new Object();
console.log(
  "Object.prototype === myObject.__proto__",
  Object.prototype === myObject.__proto__
);
console.log(Object.getOwnPropertyNames(Object)); //[]
/***
 * [
  'length',
  'name',
  'prototype',
  'assign',
  'getOwnPropertyDescriptor',
  'getOwnPropertyDescriptors',
  'getOwnPropertyNames',
  'getOwnPropertySymbols',
  'hasOwn',
  'is',
  'preventExtensions',
  'seal',
  'create',
  'defineProperties',
  'defineProperty',
  'freeze',
  'getPrototypeOf',
  'setPrototypeOf',
  'isExtensible',
  'isFrozen',
  'isSealed',
  'keys',
  'entries',
  'fromEntries',
  'values'
]
 */
