function square(number) {
  return number * number;
}
function greetins(name) {
  console.log(`Hello ${name}!`);
}
console.log(
  "long inside the utils module is runnig before exporting the functions form the module"
);
export { square, greetins };
