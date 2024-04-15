/*
    1. Create a function called "goGetCandies" which will
       return a Promise Object that resolves to the value:
       { candy: "sour keys", quantity: 10 }
       This should take 2 seconds

    2. Create another function called "sellCandies" that
       will take a candy Object like above ^ and return
       a Number that is 25 * quantity. This will be 
       how much (in cents) we get for our candies. However,
       make this function take 3 seconds to do this math
       (return a Promise with a setTimeout with the answer).

    3. Write an async function that uses await to:
       1. Get the candy object from goGetCandies()
       2. Passes it to "sellCandies" and waits for the response
       3. Prints out how much money we made from our sale

    4. Do the same steps as #3 but with vanilla Promises.

    Q1: Which of these 2 methods do you prefer?
    Q2: Which of these 2 methods is easier to read?
*/
function goGetCandies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour keys", quantity: 10 });
    }, 2000);
  });
}

function sellCandies(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(25 * data.quantity);
    }, 3000);
  });
}

async function getdata() {
  const data = await goGetCandies();
  const price = await sellCandies(data);
  console.log(price);
}
getdata();

//using old method of promise chaining

const promise1 = goGetCandies();
promise1
  .then((data) => {
    return sellCandies(data);
  })
  .then((price) => console.log(price));
