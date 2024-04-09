/**
 * The reduce is used to iterate over an array and accumulate a single value by applying a function to each element of the array, 
 * from left to right, reducing it to a single value
 * callback: A function to execute on each element in the array. It takes four arguments
      accumulator: The accumulated value previously returned by the callback, or provided as initialValue
      currentValue: The current element being processed in the array.
      index (Optional): The index of the current element being processed in the array.
      array (Optional): The array reduce() was called upon.
 * reduce() applies the callback function to each element of the array, passing the result of each computation to the next iteration.
 * The accumulator parameter stores the accumulated value across iterations. On the first iteration, 
   it can either be initialized explicitly using initialValue or set to the first element of the array if no initialValue is provided.
 * On subsequent iterations, the accumulator is the value returned from the previous iteration.
 * => The return value of the callback function becomes the new value of the accumulator. AND=> there are two parameter <=**
 * The final value of the accumulator after the last iteration is returned as the result of the reduce() call.
**/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// sum is now 15

const nums = [5, 10, 15, 20, 25, 30, 35];

const reduced = nums.reduce((result, num) => {
  console.log(result, num);
  result.push(num);

  return result;
}, []);

console.log(reduced);
