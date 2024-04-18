/*
    1. Create a function called "palindrome" that will take
       a single String as an argument

    2. The function will return true if the String is a palindrome
       or false if it's not

    3. A String is a palindrome if it reads the same start-end
       as it does end-start

    4. Examples of palindromes:
       - racecar
       - level
       - mom
       - kayak

    5. Solve this using recursion instead of loops

    HINT: What are the base-cases? (I thought of 4)
*/

const palindrome = function (string, start) {
  let end = string.length - 1 - start;
  if (start >= end) return true;

  if (string[start] != string[end]) {
    return false;
  } else {
    return palindrome(string, start + 1);
  }
};
const data = palindrome("racecar", 0);
console.log(data);
