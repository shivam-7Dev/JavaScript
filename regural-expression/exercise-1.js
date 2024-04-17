/*
    1. Create a variable called "email" that points at:
       "monkey@trees.com"

    2. Create a variable called "emailPattern" that is
       a regular expression that will look for a string
       that ENDS with ".com"

    3. Test "email" against "emailPattern" to see if
       it returns true/false using .test on "emailPattern"

    4. Find a match using .match on "email" with the
       "emailPattern regex"

    5. Print out the results from 3 and 4.

    BONUS: What is an issue with this pattern?
*/
const email = "monkey@treescom";
//$ dollar sign marks the end of the string
// . means any sigle character
// .com$ this means anycharacter and then com at the end of string
const emailPattern = /.com$/;
console.log(emailPattern.test(email));
console.log(email.match(emailPattern)); //[ 'scom', index: 11, input: 'monkey@treescom', groups: undefined ]
//here match is scom because s is anycharacter before com

const email2 = "monkey@trees.com";
// if you want to match the . then you will have to escape it with the help of backslash
const emailPattern2 = /\.com$/;
console.log(emailPattern2.test(email)); //false
console.log(emailPattern2.test(email2)); //true
console.log(email.match(emailPattern)); //[ 'scom', index: 11, input: 'monkey@treescom', groups: undefined ]
