/*
    1. Create a class called "Animal"

    2. Allow us to pass in 2 properties/fields to the
       Animal constructor which get set to the instance:
       - type (String)
       - name (String)

    3. Create two instances of the Animal class of your
       choice passing in different "type" and "name" for each

    4. Print out both animal instances

    5. Change the "name" of one of your animals and print it
       out again.

    *HINT: "this" will refer to the instance inside the class
*/

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const monkey = new Animal("Oscar", "Monkey");
const fish = new Animal("Nemo", "fish");

console.log("monkey", monkey); //  monkey Animal { name: 'Oscar', type: 'Monkey' }
console.log("fish", fish); // fish Animal { name: 'Nemo', type: 'fish' }

monkey.name = "Rancho";
console.log("monkey", monkey); //monkey Animal { name: 'Rancho', type: 'Monkey' }

console.log(Object.getOwnPropertyNames(monkey)); // [ 'name', 'type' ]
console.log(Object.getOwnPropertyNames(monkey.__proto__)); // [ 'constructor' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(monkey))); //[ 'constructor' ]

//printing the prototype chain of monkey

let proto = Object.getPrototypeOf(monkey);

while (proto) {
  console.log(proto.constructor.name);
  //   proto = proto.__proto__;
  proto = Object.getPrototypeOf(proto);
}

// Animal
// Object
