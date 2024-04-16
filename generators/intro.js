/**
 * To understand generators better, let's dive into their key features and how they work:
  #Generator Function Syntax
   1.Generator functions are declared using the function* syntax.
   2.Inside a generator function, you use the yield keyword to pause the function's execution and return a value to the caller.
  
  #Yield Keyword:
    1. The yield keyword is used within the generator function to pause its execution and return a value to the caller.
    2. Each time you call yield, the function pauses and returns the value specified after the yield keyword.
    3.The generator function retains its state, allowing it to resume from where it left off when called again

  #Iterator Protocol:
    1.Generators automatically implement the iterator protocol in JavaScript
    2.This means you can iterate over the values produced by a generator using a for...of loop 
    or using other iterable mechanisms like the ... spread operator.
 */

const counter = function* () {
  // pause here and return the generator
  console.log("This is the first log");
  yield 1;
  console.log("this is after yield 1");
  yield 2;
  yield 3;
};

console.log(counter);

const counterGenerator = counter();
console.log(counterGenerator);

console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
