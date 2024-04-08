/*
    1. Create a let variable called "points" and print it out
    2. Assign "points" the number 20 and print it out
    3. Add 15 to "points" and print it out

    Question1: What are all the ways you can achieve step 3 above?
    Question2: What would happen if you tried to do this with a const variable?
*/

// 1. Create a let variable called "points" and print it out
let points;
console.log(points);

// 2. Assign "points" the number 20 and print it out
points = 20;
console.log(points);

// 3. Add 15 to "points" and print it out
points += 15;
console.log(points);

// Question1: What are all the ways you can achieve step 3 above?
// - points = points + 15;
// - points += 15;

// Question2: What would happen if you tried to do this with a const variable?
// If you try to do this with a const variable, you will get an error because const variables cannot be reassigned.
