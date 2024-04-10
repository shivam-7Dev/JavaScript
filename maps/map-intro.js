/**
 * The Map data structure in JavaScript is a collection of key-value pairs where each key can only occur once within the map.
 * Unlike objects, keys in maps can be of any data type, including objects and functions
 *  Map was introduced in ECMAScript 6 (ES6) and provides a more versatile alternative to plain JavaScript objects in certain scenarios.
 * Support for keys of any data type, including objects and functions.
 * Preserved order of insertion of key-value pairs.
 * Built-in methods for iterating, checking existence, and getting the size of the map.
 =>  Map is particularly useful in scenarios where you need a data structure with keys of different types, or 
    when you need to preserve the order of insertion.
    It's commonly used in various JavaScript applications for storing and manipulating collections of data.

*/

// Creating a Map:You can create a new Map object using the Map constructor.
// Optionally, you can pass an iterable (like an array) containing key-value pairs to initialize the map.
const myMap = new Map();

//Adding Key-Value Pairs:
myMap.set("name", "John");
myMap.set(
  42,
  "Answer to the Ultimate Question of Life, the Universe, and Everything"
);
myMap.set({ key: "value" }, "Object key");
console.log(myMap);

/**
  Map(3) {
  'name' => 'John',
  42 => 'Answer to the Ultimate Question of Life, the Universe, and Everything',
  { key: 'value' } => 'Object key'
  }
*/

//Getting Values:
console.log(myMap.get("name")); // Output: John
console.log(myMap.get(42)); // Output: Answer to the Ultimate Question of Life, the Universe, and Everything

//Checking Existence of Keys:
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("age")); // Output: false

//Deleting Key-Value Pairs:
myMap.delete(42);

//Size of the Map:
console.log(myMap.size);
