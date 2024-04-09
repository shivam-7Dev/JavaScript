/*
 The map() method in JavaScript is used to iterate over an array and transform each element in the array according to a callback function,
 creating a new array with the results of calling the callback function on every element in the original array 
 
 * map() calls a provided callback function once for each element in the array in order, and constructs a new array from the results.
 * It doesn't modify the original array; instead, it returns a new array.
 * The callback function is invoked with three arguments: the value of the element, the index of the element, and the array itself.
 * The return value of the callback function is what gets added to the new array.

*/

const numbers = [5, 10, 15, 20, 25];

const timesTen = numbers.map((number) => {
  return number * 10;
});

console.log(timesTen);
console.log(numbers);
