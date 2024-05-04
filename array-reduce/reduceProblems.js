/**
 * Example of redcuing to an object
 * genereate a object which will have key age and its value will be the total number of person whose age is the age
 * finding the count of total users of a perticulat age
 * { 25:2,43: 4 }
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
//{ '25': 2, '30': 1, '35': 1, '40': 2, '45': 1 }

/**
 * getting list of all user in a paricular group
 *
 */

const ageList = arrayOfUsers.reduce((acc, curr) => {
  const age = curr.age;

  /**
    check if age is present in the acc object
    if age is present the append the curr user to that array
  */

  if (age in acc) {
    acc[age].push(curr);
    return acc;
  }

  /**
   * of age if not present then initalise it to array and put the value of curr object into it
   */
  acc[age] = [curr];
  return acc;
}, {});

console.log(ageList);
/**
    {
     25: [
        { firstName: "John", age: 25, email: "john.doe@example.com" },
        { firstName: "Lee", age: 25, email: "michael.lee@example.com" },
        ],
    30: [{ firstName: "Miller", age: 30, email: "david.miller@example.com" }],
    35: [{ firstName: "Johnson", age: 35, email: "bob.johnson@example.com" }],
    40: [
        { firstName: "Brown", age: 40, email: "charlie.brown@example.com" },
        { firstName: "Taylor", age: 40, email: "olivia.taylor@example.com" },
    ],
    45: [{ firstName: "Wilson", age: 45, email: "sarah.wilson@example.com" }],
    }
 */
