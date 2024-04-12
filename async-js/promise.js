// A promise is an object that represents the eventual completion or failure of an asynchronous operation.
// It is commonly used for handling asynchronous operations in JavaScript, such as making HTTP requests or reading files.

// To create a promise, you can use the Promise constructor, which takes a function as an argument.
// This function, called the executor, is responsible for initiating the asynchronous operation and resolving or rejecting the promise.

const myPromise = new Promise((resolve, reject) => {
  // Inside the executor function, you perform your asynchronous operation.
  // You can use any asynchronous operation, such as making an API call or reading a file.

  // If the operation is successful, you call the resolve function and pass the result as an argument.
  // This will fulfill the promise and trigger the "then" callback.
  resolve("Operation completed successfully!");

  // If the operation encounters an error, you call the reject function and pass the error as an argument.
  // This will reject the promise and trigger the "catch" callback.
  // reject(new Error("Something went wrong!"));
});

// Once the promise is created, you can chain callbacks using the "then" and "catch" methods.
// The "then" method is called when the promise is fulfilled, and it receives the resolved value as an argument.
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// Promises provide a more structured way to handle asynchronous operations compared to callbacks.
// They allow you to write cleaner and more readable code by avoiding callback hell and enabling better error handling.

// When working with promises, there are a few things to keep in mind:
// 1. Promises are asynchronous, so they don't block the execution of other code.
// 2. Promises have three states: pending, fulfilled, and rejected.
//    Once a promise is fulfilled or rejected, it becomes settled and its state cannot be changed.
// 3. Promises can only be resolved or rejected once. Once settled, their state and value are immutable.
// 4. Always handle errors using the "catch" method to prevent unhandled promise rejections.
// 5. Promises can be chained using multiple "then" methods to perform sequential operations.
// 6. You can use the "Promise.all" method to handle multiple promises concurrently.
