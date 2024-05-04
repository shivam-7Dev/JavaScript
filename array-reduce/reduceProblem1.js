/**
 * find all the users age less than 30 and make print array of their first Name
 */

const arrayOfUsers = [
  {
    firstName: "John",
    age: 25,
    email: "john.doe@example.com",
  },

  {
    firstName: "Johnson",
    age: 35,
    email: "bob.johnson@example.com",
  },

  {
    firstName: "Brown",
    age: 40,
    email: "charlie.brown@example.com",
  },

  {
    firstName: "Miller",
    age: 30,
    email: "david.miller@example.com",
  },
  {
    firstName: "Wilson",
    age: 45,
    email: "sarah.wilson@example.com",
  },
  {
    firstName: "Lee",
    age: 25,
    email: "michael.lee@example.com",
  },
  {
    firstName: "Taylor",
    age: 40,
    email: "olivia.taylor@example.com",
  },
];

/**
 * we want to an array as output so we will give empty array as the intial value
 * and fill that empty array with each elemet based on the condition
 * [ 'John', 'Lee' ]
 */

const lessThan30 = arrayOfUsers.reduce((acc, curr) => {
  const age = curr.age;

  if (age < 30) {
    acc.push(curr.firstName);
    return acc;
  }
  return acc;
}, []);

console.log(lessThan30);
