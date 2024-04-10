/*
    1. Create an array called "items" with the following values:
        - {name: "banana", quantity: 1, price: 1.95}
        - {name: "apple", quantity: 1, price: 1.45}
        - {name: "banana", quantity: 10, price: 0.05}
        - {name: "candy", quantity: 1, price: 3.50}

    2. Create a second array called "results" that starts off empty

    3. Create a Set called "duplicates"

    4. Add all the Objects in "items" to "results" in order, while
       skipping over any duplicate-named objects you encounter
       within "items" (In this example, only add the first banana item)

    5. Print out "results" - it should be:
    [
        {name: "banana", quantity: 1, price: 1.95},
        {name: "apple", quantity: 1, price: 1.45},
        {name: "candy", quantity: 1, price: 3.50}
    ]

    HINT: Use to the Set to keep track of duplicates
*/
const items = [
  { name: "banana", quantity: 1, price: 1.95 },
  { name: "apple", quantity: 1, price: 1.45 },
  { name: "banana", quantity: 10, price: 0.05 },
  { name: "candy", quantity: 1, price: 3.5 },
];
const results = [];
//set for storing thbe item one time
const duplicates = new Set();
for (let i = 0; i < items.length; i++) {
  //checking if we have alredy stored/encountered current name
  if (duplicates.has(items[i].name)) {
    //seeing/encountring name for the second time
    console.log("duplicate detected for name", items[i].name);
    continue;
  } else {
    //we are seeing the name first time hence we want to add it to the results array
    duplicates.add(items[i].name);
    results.push(items[i]);
  }
}
console.log(results);
