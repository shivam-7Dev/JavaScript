/*
 The map() method in JavaScript is used to iterate over an array and transform each element in the array according to a callback function,
 creating a new array with the results of calling the callback function on every element in the original array 

 * map() calls a provided callback function once for each element in the array in order, and constructs a new array from the results.
 * It doesn't modify the original array; instead, it returns a new array.
 * The callback function is invoked with three arguments: the value of the element, the index of the element, and the array itself.
 * The return value of the callback function is what gets added to the new array.

*/

const numbers = [5, 10, 15, 20, 25, 30];

const timesTen = numbers.map((number) => {
  console.log(number * 10);
  return undefined;
});

console.log(timesTen);

// Some use cases

// 1. Formatting Data for Display:

const data = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Alice", age: 25 },
  { id: 3, name: "Bob", age: 35 },
];
const formattedData = data.map(
  (person) => `${person.name} (${person.age} years old)`
);
// Output: ["John (30 years old)", "Alice (25 years old)", "Bob (35 years old)"]

// 2.Extracting Specific Data
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Smartphone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];
const productNames = products.map((product) => product.name);
// Output: ["Laptop", "Smartphone", "Tablet"]

// 3.Normalizing Data
const rawData = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
];
const normalizedData = rawData.map((person) => ({
  id: person.id,
  fullName: `${person.firstName} ${person.lastName}`,
}));
// Output: [{ id: 1, fullName: 'John Doe' }, { id: 2, fullName: 'Jane Smith' }]

// 4.Converting Data Types
const numbersArr = ["1", "2", "3", "4", "5"];
const parsedNumbers = numbersArr.map((num) => parseInt(num));
// Output: [1, 2, 3, 4, 5]

// 5. Generating Unique IDs
const items = ["Apple", "Banana", "Orange"];
const itemsWithIds = items.map((item, index) => ({
  id: index + 1,
  name: item,
}));
// Output: [{ id: 1, name: 'Apple' }, { id: 2, name: 'Banana' }, { id: 3, name: 'Orange' }]
