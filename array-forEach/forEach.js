/* 
 The forEach method in JavaScript is used to iterate over an array and perform a specified action for each element in the array.
 It is a higher-order function that takes a callback function as an argument. 
 The callback function is executed for each element in the array, and it can perform any desired operation on the element.
 Here's the syntax for using the forEach method:

 array.forEach(callback(currentValue, index, array) {
  // code to be executed for each element
 });

*/

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

const numbersArr = [1, 2, 3, 4, 5];
let sum = 0;

numbersArr.forEach((number) => {
  sum += number;
});

console.log(sum); // Output: 15

// =>  usecase for modifing the original array

const names = ["Alice", "Bob", "Charlie"];

names.forEach((name, index, array) => {
  //names[index] = name.toUpperCase();
  array[index] = name.toUpperCase();
});

console.log(names); // Output: ['ALICE', 'BOB', 'CHARLIE']
