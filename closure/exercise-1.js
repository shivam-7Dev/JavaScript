/*
    1. Create a function called "stringBuilder" that has no
       parameters
    2. Create a String inside "stringBuilder" named "result"
       that starts as an empty String
    3. Create a Function inside "stringBuilder" called "add"
       that has a single parameter called "characters"
       - This function will add/concatenate the "characters"
         to the "result" String and then return the "result"
    4. Return the "add" function from "stringBuilder"

    5. Test out stringBuilder a few times like so:
       const builder = stringBuilder();
       let text = builder("Hello ");
       text = builder("there ");
       text = builder("friend!");
       console.log(text); // "Hello there friend!"
*/
function stringBuilder() {
  let result = "";
  function add(char) {
    result += char;
    return result;
  }
  return add;
}
const builder = stringBuilder();
console.log(builder);
let text = builder("Hello ");
console.log(text);
text = builder("there ");
text = builder("friend!");
console.log(text); // "Hello there friend!"
