const character = {
  name: "Rick Axley",
  class: "Axe Wielder",
  quote: "I'll never let you down",
  [Symbol("name")]: false,
  [Symbol("age")]: 10,
  [4 + 5]: "age",
};
console.log(Object.getOwnPropertyNames(character)); //["9", "name", "class", "quote"];

console.log(Object.keys(character)); //["9", "name", "class", "quote"];

for (const key of Object.keys(character)) {
  console.log(key);
}

console.log(Object.getOwnPropertySymbols(character)); //[ Symbol(name), Symbol(age) ]
