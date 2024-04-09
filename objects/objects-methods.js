const animal = {
  id: 42,
  name: "rawr",
  type: "dog",
  "num legs": 4,
  numLegs: 4,
};

// console.log(animal.keys());
console.log(Object.keys(animal)); //[ 'id', 'name', 'type', 'num legs', 'numLegs' ]

console.log(Object.values(animal)); //[ 42, 'rawr', 'dog', 4, 4 ]

console.log(Object.entries(animal));

console.log(Object.getOwnPropertyNames(animal)); //[ 'id', 'name', 'type', 'num legs', 'numLegs' ]

console.log(Object.getPrototypeOf(animal)); //[Object: null prototype] {}

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(animal)));
/**
 *[
  'constructor',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
  'valueOf',
  '__proto__',
  'toLocaleString'
]
 */
