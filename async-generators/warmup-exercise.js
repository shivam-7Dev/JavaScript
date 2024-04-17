/*
    1. Create an async Generator function that will yield
       a Promise that resolves after 1 second with a random
       number between 0-9 (integer and inclusive)

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)
*/

const counter = function* () {
  console.log("This is the first log");
  yield 1;
  console.log("this is after yield 1");
  yield 2;
  yield 3;
};

const counterGenerator = counter();
// counterGenerator is iterable so we can use a normal for of loop
for (let item of counterGenerator) {
  console.log(item);
}
// console.log(counterGenerator.next());
// console.log(counterGenerator.next());
// console.log(counterGenerator.next());
// console.log(counterGenerator.next());
// console.log(counterGenerator.next());
console.log("-----");

async function* test() {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * (9 - 0 + 1) + 1);
      resolve(randomNumber);
    }, 1000);
  });
}
const asynIterator = test();
/**
 * asynIterator is not a normal iterator obj but it is a async iterator so we cannot apply the normal for off loop because it
 * asynIterator.next()=> this will return us a promise object on which we can use then method to extract the value
 * console.log(asynIterator.next().then((data) => console.log(data)));
 */

asynIterator.next().then((data) => console.log("data", data));

const asynIterator2 = test();
/**
    async function getAllData() {
    for (let item of asynIterator2) {
       console.log("item", item);
    }
   }
  getAllData();
  *TypeError: asynIterator2 is not iterable

*/

async function getAllData() {
  for await (let item of asynIterator2) {
    console.log("item", item);
  }
}
getAllData();
