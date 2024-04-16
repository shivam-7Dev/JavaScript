/*
    1. Create a generator function called "countTo10" that will
       yield the numbers 0-10 (inclusive) then stop.

    2. Create the generator object by calling the generator
       function and iterate through the generator using a
       for...of loop.
*/
function* countTo10() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}
const data = countTo10();
obj = data.next();
while (!obj.done) {
  console.log(obj);
  obj = data.next();
}
const data2 = countTo10();
for (let item of data2) {
  console.log(item);
}
