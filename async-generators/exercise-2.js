/*
    1. Create an async Generator function that has a single
       parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will
       yield a Promise that resolves after 100ms that:
       - If the letter is a vowel (aeiou) then resolve with a "*"
       - Otherwise resolve with the letter, but uppercased

    2. Create the generator object by calling the function ^
       with a value of "Monkeys are the coolest animal!"

    3. Use a for-await-of loop to loop through the generator

    *There are MANY ways to check if a string has any of several letters
*/
async function* generatePatter(sentence) {
  for (let letter of sentence) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        if ("aeiou".includes(letter)) {
          resolve("*");
        } else {
          resolve(letter.toUpperCase());
        }
      }, 100);
    });
  }
}
let asyncIterator = generatePatter("Monkeys are the coolest animal!");

async function printData() {
  for await (item of asyncIterator) {
    console.log(item);
  }
}

printData();
