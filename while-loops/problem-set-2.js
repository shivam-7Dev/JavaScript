/*
    Create a while loop that will print out all the even numbers
    between 10 and 40.

    Do the same for all odd numbers as well.
*/

let number = 10;

while (number < 40) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}
