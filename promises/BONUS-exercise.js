/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});
promise1.then((res) => {
  console.log(res);
});
promise2.then((res) => {
  console.log(res);
});

Promise.all([promise1, promise2]).then((res) => {
  const sum = res.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(sum);
});
