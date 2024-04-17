function square(number) {
  return number * number;
}
console.log(
  "long inside the utils module is runnig before exporting the functions form the module"
);
export { square };
