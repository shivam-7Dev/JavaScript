/*
    1. Create the following array called "nums":
        [10, 30, 50, 70, 90]

    2. Create a new array called "squares" that:
        - maps over "nums" and return each item squared (x by itself)

    3. Create another new array called "over1000" that:
        - filters "squares" to contain only values over 1000

    4. Create a const called "finale" that:
        - reduces "over1000" to a single sum of it's elements

    5. Print out "nums", "squares", "over1000" and "finale"

    BONUS^2: Can you do 1-4 all in one line?
*/

const nums = [10, 30, 50, 70, 90];
//reduce as map
const squares = nums.reduce((acc, curr) => {
  const square = curr * curr;
  acc.push(square);
  return acc;
}, []);
console.log(squares);
//reduce as filter
const over1000 = squares.reduce((acc, curr) => {
  if (curr > 1000) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(over1000);
const finale = over1000.reduce((acc, curr) => acc + curr, 0);
console.log(finale);

//Doing in one line
const sum = nums
  .map((curr) => curr * curr)
  .filter((curr) => curr > 1000)
  .reduce((acc, curr) => acc + curr, 0);
console.log(sum);
