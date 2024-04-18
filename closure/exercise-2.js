/*
    1. Create a function called "createVendingMachine" that has no
       parameters
    2. Create an Array inside "createVendingMachine" named "stock"
       that has the following values:
       ["Cola", "Chips", "Chocolate", "Juice", "Nuts"]
    3. Create a Number inside "createVendingMachine" called "coins"
       that starts at 0
    3. Create a Function inside "createVendingMachine" called "add25"
       that has no parameters. This function will:
       - Add 25 to "coins"
       - If "coins" is 100, pick a random item from "stock"
         and log out `You got some <item_name>` (do not remove
         the item from "stock") and then reset coins to 0.
       - If coins is less than 100, print out:
         "Insert ____ more coins" to show how many
         more coins are needed
    4. Return the "add25" function from "createVendingMachine"

    5. Test out createVendingMachine a few times like so:
       const vendingMachine = createVendingMachine();
       vendingMachine(); // "Insert 75 more coins"
       vendingMachine(); // "Insert 50 more coins"
       vendingMachine(); // "Insert 25 more coins"
       vendingMachine(); // "You got some Chips"
       vendingMachine(); // "Insert 75 more coins"
*/

//Math.floor(Math.random() * (max - min + 1) + min);

function createVendingMachine() {
  let stock = ["Cola", "Chips", "Chocolate", "Juice", "Nuts"];
  let coins = 0;
  function add25() {
    coins += 25;
    if (coins === 100) {
      const arrayLength = stock.length;
      const randomNumber = Math.floor(
        Math.random() * (arrayLength - 0 + 1) + 0
      );
      const item = stock[randomNumber];
      console.log(`You got some`, item);
    } else if (coins < 100) {
      const coinNeed = 100 - coins;
      console.log(`Insert ${coinNeed} more coins `);
    }
  }
  return add25;
}
const vendingMachine = createVendingMachine();
vendingMachine(); // "Insert 75 more coins"
vendingMachine(); // "Insert 50 more coins"
vendingMachine(); // "Insert 25 more coins"
vendingMachine(); // "You got some Chips"
vendingMachine(); // "Insert 75 more coins"
