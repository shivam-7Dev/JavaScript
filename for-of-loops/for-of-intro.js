/*
 The for...of loop is a powerful construct introduced in ES6 (ECMAScript 2015) for iterating over iterable objects in JavaScript
 It provides a concise and convenient way to access the values of an iterable object one by one, without needing to manage an index counter.
 iterable=> Arrays,Strings (considered iterable since ES6),Sets,Maps,Custom iterable objects (implementing the [Symbol.iterator]() method)
*/
/*
 How it Works:
   1 Initialization: The loop first obtains an iterator from the provided iterable object. 
    This iterator object has a next() method that returns an object with two properties:
        value: The current element being iterated over.
        done: A boolean indicating whether the iteration is complete (true) or not (false).
    
   2 Iteration:the loop continues as long as done is false. In each iteration
    The value property of the iterator's next() result is assigned to the declared variable (element).
    The code within the loop body is executed using the current value.
   3 Completion: When done becomes true (the iterator has reached the end), the loop exits
*/

//syntax
for (const element of iterable) {
  // Code to be executed for each element
}

//Iterating over an Array
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit); // Output: apple, banana, orange
}

//Iterating over a String:
const message = "Hello, world!";
for (const char of message) {
  console.log(char); // Output: H, e, l, l, o, (space), w, o, r, l, d, !
}

//Iterating over a Set:
const uniqueNumbers = new Set([1, 2, 2, 3, 4]);
for (const number of uniqueNumbers) {
  console.log(number); // Output: 1, 2, 3, 4 (in order of insertion, not necessarily ascending)
}

//Iterating over a Map:
const person = new Map([
  ["name", "Alice"],
  ["age", 30],
]);
for (const [key, value] of person) {
  console.log(key, value); // Output: name Alice, age 30
}
