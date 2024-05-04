/**
 * Example of redcuing to an object
 * genereate a object which will have key age and its value will be the total number of person whose age is the age
 * { 25:2,43: 4 }
 */

const arrayOfUsers = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "john.doe@example.com",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    email: "alice.smith@example.com",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    age: 35,
    email: "bob.johnson@example.com",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    email: "jane.doe@example.com",
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    age: 40,
    email: "charlie.brown@example.com",
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    age: 35,
    email: "emily.davis@example.com",
  },
  {
    firstName: "David",
    lastName: "Miller",
    age: 30,
    email: "david.miller@example.com",
  },
  {
    firstName: "Sarah",
    lastName: "Wilson",
    age: 45,
    email: "sarah.wilson@example.com",
  },
  {
    firstName: "Michael",
    lastName: "Lee",
    age: 25,
    email: "michael.lee@example.com",
  },
  {
    firstName: "Olivia",
    lastName: "Taylor",
    age: 40,
    email: "olivia.taylor@example.com",
  },
];

// here we want to reduct the arrayOfUsers into and object so the initial value will be the empty object and on each iteration we will fill that object
const result = arrayOfUsers.reduce((acc, curr) => {
  const age = curr.age;
  //check if the age is present in the acc obje
  if (age in acc) {
    // if age is present then increment its count
    acc[age] = acc[age] + 1;
    return acc;
  } else {
    // make an entry of the age in the object wiht that key and initalise its value with one
    acc[age] = 1;
    return acc;
  }
}, {});

console.log(result);
