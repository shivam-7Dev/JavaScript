/*
  Function Expression: A function expression is an assignment of a function to a variable or a constant. 
  Function expressions are not hoisted, so you need to define them before you can use them in your code
*/
const sayHello = () => {
  console.log("Hello, jello!");
  console.log("meow!");
};

// "Calling" the function
sayHello("moo!");
sayHello("foo!");
sayHello();
sayHello();

/*

  Function declarations are hoisted, which means they are moved to the top of their scope during the compilation phase.
  This allows you to call the function before it is defined in the code.

  Function Declaration: A function declaration is a statement that defines a named function using the function keyword.
  It has the following syntax:

*/

function functionName(parameters) {
  // function body
}
