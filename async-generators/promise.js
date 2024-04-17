const generator = function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
};

const generatorObject = generator();

console.log(generator);
console.log(generatorObject);
// console.log(generatorObject.next());

// generatorObject.next().value.then((result) => {
//   console.log("result ", result);
// });

// const getObjectsAsync = async () => {
//   for (const promise of generatorObject) {
//     const result = await promise;
//     console.log(result);
//   }
// };

// getObjectsAsync();

/**
 * wrong for of loop
  for (const promise of generatorObject) {
    const result = await promise;
    console.log(promise);
  }
*/
async function call() {
  for await (const promise of generatorObject) {
    // const result = await promise;
    console.log(promise);
  }

  for (const promise of generatorObject) {
    const result = await promise;
    console.log(result);
    // console.log(promise);
  }
}
call();
