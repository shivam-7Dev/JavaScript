/*
    Write out the truth tables for the following boolean operators
    using two boolean values, one on each side:
    - AND
    - OR
    - NOT

    Use console.log to log out the results for each.

    HINT: AND and OR will have 4 possibilities, while NOT has 2
    HINT2: console.log(true && true)
*/
console.log("AND Truth Table:");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("OR Truth Table:");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("NOT Truth Table:");
console.log(!true); // false
console.log(!false); // true
