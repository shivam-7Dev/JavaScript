/*
    1. Create a function called "flatten" that will take
       a single Object as an argument

    2. The function will return a flattened version of the Object
       no matter the nested levels (it will overwrite duplicate keys)

    3. Solve this using recursion

    Example:    
        
    console.log(
    flatten({
        id: 1,
        name: "bob",
        happy: true,
        friend: {
        id2: 2,
        name2: "alice",
        happy2: true,
        },
    })
    );

    // {
    //     id: 1,
    //     name: 'bob',
    //     happy: true,
    //     id2: 2,
    //     name2: 'alice',
    //     happy2: true
    // }

    HINT: Use the "typeof" operator to check if something
          is an Object (naiive check, no need to be 100%)
    HINT2: The "delete" operator will delete a key from an Object
*/
//typeof value === "object" && !Array.isArray(value) && value !== null
function flatten(obj) {
  let result = {};
  for (let key of Object.keys(obj)) {
    const value = obj[key];
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      //nested object
      result = { ...result, ...flatten(value) };
    } else {
      //primitive value
      result[key] = obj[key];
    }
  }

  return result;
}
console.log(
  flatten({
    id: 1,
    name: "bob",
    happy: true,
    friend: {
      id2: 2,
      name2: "alice",
      happy2: true,
    },
  })
);
console.log(
  flatten({
    level1: {
      level2A: {
        level3A: "value3A",
        level3B: "value3B",
      },
      level2B: {
        level3C: "value3C",
        level3D: "value3D",
      },
    },
    topLevel: "topValue",
  })
);
