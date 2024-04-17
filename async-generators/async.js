const asyncGenerator = async function* () {
  let i = 0;

  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
        i++;
      }, 1000);
    });
  }
};

const asyncGeneratorObject = asyncGenerator();

const asyncGeneratorExecuter = async () => {
  for await (const promise of asyncGeneratorObject) {
    console.log(promise);
  }
};

asyncGeneratorExecuter();
