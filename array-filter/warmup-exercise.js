/*
    1. Create an array called "practice" with the numbers 10-20 (inclusive)

    2. Create another array using filter that keeps the even numbers in "practice"
    
    3. Print out both "practice" and the new filtered array
*/

const practice = [];
for (let i = 1; i <= 10; i++) {
  practice.push(i);
}
console.log(practice);

const even = practice.filter((number) => number % 2 === 0);
console.log(even);
