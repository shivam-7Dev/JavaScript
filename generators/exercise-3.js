/*
    1. Create a generator function called "getRandomNumber"
       that generates a random number between 1-10 (inclusive)
       exactly 5 times

    2. Create another generator function called "groceryList"

       Inside of "groceryList", create an variable called
       "groceries" that points at:
       ["Avocado", "Cookie", "Milk", "Soup", "Soda"]

       The generator will yield a random grocery from "groceries"
       and also remove that grocery item from the list of "groceries"
       Eg: const groceries = groceryList();
           groceries.next() => "Cookie"
           groceries.next() => "Soup"

    3. Create 2 generator Objects by calling each of the 2
       generator functions above ^

    4. Create a regular for loop that will loop 5 times and calls
       .next() on each of the generator Objects ^ to print out a
       random number followed by a random grocery:
       Eg: 5 Avocado
           10 Soup
*/
function* getRandomNumber() {
  for (let i = 0; i < 5; i++) {
    //  yield Math.floor(Math.random() * (max - min + 1) + min);
    yield Math.floor(Math.random() * (10 - 1 + 1) + 1);
  }
}

function* groceryList() {
  const groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];
  //   let length = groceries.length;
  //   while (length) {
  //     yield groceries[length - 1];
  //     groceries.pop();
  //     length = groceries.length;
  //   }

  //   for (let i = 0; i < groceries.length; i++) {
  //     console.log("groceries.length", groceries.length);
  //     const randomNumber = Math.floor(
  //       Math.random() * (groceries.length - 1 - 0 + 0) + 0
  //     );
  //     const removedItem = groceries.splice(randomNumber, 1);
  //     yield removedItem[0];
  //     console.log("groceries.length", groceries.length);
  //   }
  for (let i = 0; groceries.length > 0; i++) {
    const randomNumber = Math.floor(
      Math.random() * (groceries.length - 1 - 0 + 0) + 0
    );
    const removedItem = groceries.splice(randomNumber, 1);
    yield removedItem[0];
  }
}

const generator1 = getRandomNumber();
const generator2 = groceryList();
for (let number of generator1) {
  console.log(number, generator2.next().value);
}
