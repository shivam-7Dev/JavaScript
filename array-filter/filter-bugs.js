const nums = [5, 6, 7, 8, 9, 10];

const oddNumbers = nums.filter((num) => {
  //returning true only for odd numbers
  if (num % 2 === 1) {
    return 100; // truthy
  }
  // for others callback function is returning undefined which is falsy value
  // ???
});

console.log(nums);
console.log(oddNumbers);
