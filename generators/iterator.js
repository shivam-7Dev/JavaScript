/**
 * for of loop in js uses the iterator under the hood to loop over an  array
 * but for of loop is capable of loopin over anything which is iterator ( sets, maps, array of some custom iterator obj) as long as they provide iterator obje to iterator over
 * the array provide and iterator for the for of loop to iterat over the loop
 * array has array[Symbol.iterator]() method which provides the the  iterator obj
 */

const dragons = ["cool dragon", "angy dragon ", "nasty dragon"];
const interatorObj = dragons[Symbol.iterator]();

for (let items of interatorObj) {
  console.log(items);
}
for (let dragon of dragons) {
  console.log(dragon);
}

for (let items of dragons[Symbol.iterator]()) {
  console.log(items);
}
