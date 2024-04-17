/*
    1. Create an async Generator function that has a 50%
       chance of yielding either of the following Promises:
       - Resolve after 500ms with the value "Fast!"
       - Resolve after 3000ms with the value "Slow!"

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    *HINT: Math.random() is your friend
*/

async function* randomData() {
  while (true) {
    yield new Promise((resolve, reject) => {
      const random = Math.floor(Math.random() * (2 - 1 + 1) + 1);
      console.log(random);
      setTimeout(
        () => {
          resolve(random > 1 ? "Fast!" : "Slow!");
        },
        random > 1 ? 500 : 3000
      );
    });
  }
}

const data = randomData();

async function printData() {
  for await (let item of data) {
    console.log(item);
  }
}
printData();
