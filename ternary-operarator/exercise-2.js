/*
    1. Create a variable called "wizards" that points at the array:
       ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Merlin"]

    2. Map over "wizards" to create a new array that does the following:
      - If the name contains the letter "n" return the name but with
        all the "n"'s replaced with a "*" character
      - Otherwise return the name, but upper-cased
      - Use a regular if/else statement for this
   
    3. Repeat step 2 but with a ternary expression

    BONUS: Can you shorten this with the short "arrow function
           expression" syntax?
*/
const wizzards = [
  "Gandalf",
  "Voldemort",
  "Harry",
  "Jafar",
  "Saruman",
  "Merlin",
];

const newData = wizzards.map((wizzard) => {
  if (wizzard.includes("n")) {
    return wizzard.replaceAll("n", "*");
  } else {
    return wizzard.toUpperCase();
  }
});
console.log(newData);

const data = wizzards.map((wizzard) =>
  wizzard.includes("n") ? wizzard.replaceAll("n", "*") : wizzard.toUpperCase()
);
console.log(data);
