// Example of callback hell
function asyncOperation1(callback1) {
  setTimeout(function () {
    console.log("Async operation 1 completed");
    callback1();
  }, 1000);
}

function asyncOperation2(callback2) {
  setTimeout(function () {
    console.log("Async operation 2 completed");
    callback2();
  }, 2000);
}

function asyncOperation3(callback3) {
  setTimeout(function () {
    console.log("Async operation 3 completed");
    callback3();
  }, 1500);
}

function asyncOperation4(callback4) {
  setTimeout(function () {
    console.log("Async operation 4 completed");
    callback4();
  }, 500);
}

// Start the execution by calling asyncOperation1
asyncOperation1(function () {
  // This callback function is executed after asyncOperation1 completes
  asyncOperation2(function () {
    // This callback function is executed after asyncOperation2 completes
    asyncOperation3(function () {
      // This callback function is executed after asyncOperation3 completes
      asyncOperation4(function () {
        // This callback function is executed after asyncOperation4 completes
        console.log("All async operations completed");
      });
    });
  });
});

/**
   * The code defines four asynchronous operations: asyncOperation1, asyncOperation2, asyncOperation3, and asyncOperation4.
   *  Each operation takes a callback function as a parameter.
    Each asynchronous operation uses the setTimeout function to simulate a delay before completing the operation.
    When an asynchronous operation completes, it calls the provided callback function.
    The execution flow starts with asyncOperation1. It is called with an anonymous callback function as an argument.
    Inside asyncOperation1, after a delay of 1000 milliseconds, it logs "Async operation 1 completed" to the console and then calls the callback function provided as an argument.
    The callback function for asyncOperation1 is defined inline as an anonymous function.
    This callback function is executed after asyncOperation1 completes.
    Inside the callback function for asyncOperation1, asyncOperation2 is called with another anonymous callback function as an argument.
   */
