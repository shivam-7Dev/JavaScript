const fruit = true && "bananas";
console.log(fruit); // Output: "bananas"

console.log(false && "oranges"); // Output: false
console.log(0 && "cucumbers"); // Output: 0

console.log("-------");

console.log(true || "bananas"); // Output: true
console.log(false || "oranges"); // Output: "oranges"
console.log("" || "cucumbers"); // Output: "cucumbers"

console.log("-------");

console.log(0 ?? "monkeys"); // Output: 0
console.log("" ?? "koalas"); // Output: ""
console.log(null ?? "elephants"); // Output: "elephants"
