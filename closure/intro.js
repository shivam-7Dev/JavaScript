/**
 *closure is the idea of closing over or remembering the state of the fuction
 * Closures involve a function "closing over" or retaining access to its lexical scope,
 *  even after the outer function has finished executing.
 * This allows the inner function to remember and access variables and parameters from its enclosing scope.
 * The inner fuction forms a closure with the surrounding or parent function  and the Closure(wrapperFunction)
 * is availbale in scope chain
 */

const wrapperFunction = () => {
  const prices = [10, 15, 20, 25];

  const logPrices = () => {
    console.log(prices);
  };

  logPrices();

  //   console.log(prices);
};

wrapperFunction();

// console.log(prices);
