/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       it out to the terminal

    HINT: Add the numbers to a Set as you for-loop over "numbers"

    *This is quite challenging and is a common interview question
*/
const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];
//set for storing numbers
const unique = new Set();
for (let i = 0; i < numbers.length; i++) {
  //checking if we have alredy stored/encountered  that number
  if (unique.has(numbers[i])) {
    console.log(numbers[i]);
    //we  are breaking the loop because we want to print the first duplicate only
    break;
  } else {
    unique.add(numbers[i]);
  }
}
