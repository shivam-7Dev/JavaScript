/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print
       out the INDEX of that value as well as the INDEX
       of where it was first found in "numbers"

    3. In this case, we will print:
       4 2

       (4 is where the duplicate index was)
       (2 is where the first pair of that duplicate was, as an index)

    HINT: Use a Map to keep track of number->index pairs

    *This is very challenging and is a common interview question
*/
const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];
const index = new Map();
for (let i = 0; i < numbers.length; i++) {
  if (index.has(numbers[i])) {
    const val = index.get(numbers[i]);
    console.log(val, i);
  } else {
    index.set(numbers[i], i);
  }
}
console.log("-------");
//doing the same with object
const indexObject = {};
for (let i = 0; i < numbers.length; i++) {
  // if condition : indexObject[numbers[i]] > -1
  if (indexObject.hasOwnProperty(numbers[i])) {
    const val = indexObject[numbers[i]];
    console.log(val, i);
  } else {
    indexObject[numbers[i]] = i;
  }
}
console.log(indexObject);
console.log(index);
