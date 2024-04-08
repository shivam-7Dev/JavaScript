/*
    Create a variable called "bakery" that points to an array
    Fill the array with the following String:
        - "Cake"
        - "Cookie"
        - "Bread"
        - "Scone"

    Print out bakery to make sure it has these 4 Strings in it.

    Create another variable called "myBakery" and assign it
    to "bakery" that we declared previously

    Add the following items to "myBakery":
        - "Croissant"
        - "Granola"

    Print out myBakery and bakery and observe the contents.

    WHY is this?
*/
const bakery = ["Cake", "Cookies", "Bread", "Scone"];
for (let index = 0; index < bakery.length; index++) {
  console.log(bakery[index]);
}

console.log("---------");

const myBakery = bakery;
myBakery.push("Croissant");
myBakery.push("Granola");
for (let index = 0; index < myBakery.length; index++) {
  console.log(myBakery[index]);
}
