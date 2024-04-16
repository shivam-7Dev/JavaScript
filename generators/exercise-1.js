/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/
function* randomNumber() {
  while (true) {
    yield Math.random();
  }
}
const generatorObject = randomNumber();

for (let i = 0; i < 10; i++) {
  console.log(generatorObject.next());
}
console.log("____");

const generatorObject2 = randomNumber();
function* pullNumber(count) {
  for (let i = 0; i < count; i++) {
    yield generatorObject2.next(); //{ value: 0.9134364961422914, done: false }
  }
}
const pull10 = pullNumber(5);
for (let item of pull10) {
  console.log(item.value);
}
