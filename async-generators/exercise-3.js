/*
    1. Create an async Generator function that has a single
       parameter called "time". This function will yield a
       Promise that resolves with the time taken after that
       many milliseconds. The time for each subsequent Promise
       will take TWICE as long.

    2. Create the generator object by calling the function ^
       with the value 100 to start.

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    4. Example output if we started with:
       const timeGeneratorObject = timeGenerator(100)
       for await (const time of timeGeneratorObject)
          - ^ If we logged "time" each loop we'd get:
          - 100, 200, 400, 800, 1600, 3200 ... etc
*/

// this is example of exponential back off

async function* timeGenerator(time) {
  let delay = time;
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`resolved after ${delay} milli seconds`);
        delay = delay * 2;
      }, delay);
    });
  }
}

const asyncIterator = timeGenerator(100);

async function printData() {
  for await (item of asyncIterator) {
    console.log(item);
  }
}
printData();
