/*
    1. Create a variable called "baboon" that points to a Symbol
       with a description of "Monkey"

    2. Create a variable called "gorilla" that points to a Symbol
       with a description of "Monkey" as well

    3. Print out the types of each of the symbols as well as their
       description property

    4. Are the two symbols equivalent? (Equality check)
       Why or why not?
*/
let babbon = Symbol("Monkey");
let gorilla = Symbol("Monkey");
console.log(typeof babbon);
console.log(typeof gorilla);
console.log(babbon === gorilla);
