function* generatorOne() {
  console.log("first");
  yield 1;
  console.log("two");
  yield 2;
  console.log("three");
  yield 3;
  console.log("end");
}
function* generatorTwo() {
  yield "hello ";
  yield "world";
  yield { data: 2 };
}
function* generatorThree() {
  yield "some random data one ";
  yield "some random data two";
  yield { data: "some random data three" };
}
const generatorObj1 = generatorOne();
const generatorObj2 = generatorTwo();
const generatorobj3 = generatorThree();

/**
 * there are three ways to iterate over a generator object
 * 1. for of loop
 * 2. manuall way by typing generatorObj.next().value
 * 3. while loop
 */

/**
 * for of loop
 */
for (let number of generatorObj1) {
  console.log(number);
}

/**
 * generatorObj.next().value
 */

console.log(generatorObj2.next().value);
console.log(generatorObj2.next().value);
console.log(generatorObj2.next().value);
console.log(generatorObj2.next().value);
console.log(generatorObj2.next().value);

/**
 * while loop
 */

let value = generatorobj3.next();
while (!value.done) {
  console.log(value.value);
  value = generatorobj3.next();
}
