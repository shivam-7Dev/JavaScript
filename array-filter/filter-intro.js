/*
 The filter() method in JavaScript is used to create a new array containing elements from the original array that satisfy a certain condition.
  It takes a callback function as an argument, which is executed for each element in the array.
  The callback function should return true if the element should be included in the new array, and false otherwise 
  *filter() iterates over each element in the array and applies the callback function to it.
  *If the callback function returns true for an element, that element is included in the new array.
  *If the callback function returns false for an element, that element is excluded from the new array.
 *
*/

const nums = [5, 6, 7, 8, 9, 10];

const evenNumbers = nums.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
});

console.log(nums);
console.log(evenNumbers);

// Real world use cases for filter

// 1.Filtering Products by Price Range:
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Headphones", price: 200 },
];
const affordableProducts = products.filter((product) => product.price <= 500);
// Output: [{ name: 'Smartphone', price: 500 }, { name: 'Tablet', price: 300 }, { name: 'Headphones', price: 200 }]

//2,Filtering User Data
const users = [
  { id: 1, name: "John", isAdmin: true },
  { id: 2, name: "Alice", isAdmin: false },
  { id: 3, name: "Bob", isAdmin: true },
  { id: 4, name: "Charlie", isAdmin: false },
];
const admins = users.filter((user) => user.isAdmin);
// Result: [{ id: 1, name: 'John', isAdmin: true }, { id: 3, name: 'Bob', isAdmin: true }]

//3.Filtering Search Results:

const searchResults = [
  { id: 1, title: "JavaScript: The Good Parts", type: "book" },
  { id: 2, title: "Eloquent JavaScript", type: "book" },
  { id: 3, title: "JavaScript Crash Course", type: "course" },
  { id: 4, title: "React Fundamentals", type: "course" },
];
const books = searchResults.filter((result) => result.type === "book");
// Result: [{ id: 1, title: 'JavaScript: The Good Parts', type: 'book' }, { id: 2, title: 'Eloquent JavaScript', type: 'book' }]

//4.Filtering Active Users:
const usersArr = [
  { id: 1, name: "John", isActive: true },
  { id: 2, name: "Alice", isActive: false },
  { id: 3, name: "Bob", isActive: true },
  { id: 4, name: "Charlie", isActive: false },
];

const activeUsers = usersArr.filter((user) => user.isActive);
// Result: [{ id: 1, name: 'John', isActive: true }, { id: 3, name: 'Bob', isActive: true }]

//5. Filter products based on multiple criteria
const productsArr = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 600,
    inStock: true,
  },
  { id: 3, name: "T-shirt", category: "Clothing", price: 20, inStock: false },
  { id: 4, name: "Sneakers", category: "Clothing", price: 80, inStock: true },
  {
    id: 5,
    name: "Headphones",
    category: "Electronics",
    price: 150,
    inStock: false,
  },
];

const filteredProducts = productsArr.filter((product) => {
  // Criteria: Price range between $50 and $200, Electronics category, and in stock
  return (
    product.price >= 50 &&
    product.price <= 200 &&
    product.category === "Electronics" &&
    product.inStock
  );
});

console.log(filteredProducts);
// Output: [{ id: 2, name: 'Smartphone', category: 'Electronics', price: 600, inStock: true }]
