/*
    1. Create a variable called "food" that points to the String "Donut"

    2. Create a series of if/else if/else statements that:
        - First checks for "food" being equal to "Fish" and console.logs
          "Sounds fishy..." if true
        - Then checks for "food" being equal to "Hummus" and console.logs
          "Want chips with that?" if true
        - Then checks for "food" being equal to "Sushi" and console.logs
          "With or without seaweed?" if true
        - Console.logs("Food not in our database, sorry!") in all other cases

    3. Run the program and make sure the correct things gets printed out, then
       change "food" to be "Sushi" and verify it still works as exected.

    4. Create a switch statement that does step 2 and then repeat step 3 to
       make sure it works the same as the if/else if/else statements
*/
const food = "Sushi";
if (food === "Fish") {
  console.log("sounds fishy....");
} else if (food === "Hummus") {
  console.log("Want chips with that?");
} else if (food === "Sushi") {
  console.log("With or without sea weed?");
} else {
  console.log("No food in database, sorry!");
}

switch (food) {
  case "Fish": {
    console.log(" sounds fishy");
    break;
  }
  case "Hummus": {
    console.log("Want chips with that?");
    break;
  }
  case "Sushi": {
    console.log("With or without sea weed?");
    break;
  }
  default: {
    console.log("No food in database, sorry!");
    break;
  }
}
