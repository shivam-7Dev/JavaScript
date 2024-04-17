function capsLock(string) {
  return string.toUpperCase();
}
console.log(
  "long inside the utils module is runnig before exporting the functions form the module"
);
export { capsLock };
