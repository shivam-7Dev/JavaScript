/*
    1. Given the class definitions below, predict
       what will be logged out with the code:

       class Animal {
        static knownMammals = [];
        mammal = false;
        eyes = 2;

        static isMammal() {}
        describe() {}
       }

       class Monkey extends Animal {
        static knownMonkeys = [];
        height;
        weight;

        static isCute() {}
        eatBanana() {}
       }

    2. What will this code print out:
       const animal = new Animal();
       console.log(Object.getOwnPropertyNames(animal))
       console.log(Object.getOwnPropertyNames(animal.__proto__))
       console.log(Object.getOwnPropertyNames(Animal))
       console.log(Object.getOwnPropertyNames(Animal.__proto__))

       const monkey = new Monkey();
       console.log(Object.getOwnPropertyNames(monkey))
       console.log(Object.getOwnPropertyNames(monkey.__proto__))
       console.log(Object.getOwnPropertyNames(Monkey))
       console.log(Object.getOwnPropertyNames(Monkey.__proto__))
*/
class Animal {
  static knownMammals = [];
  mammal = false;
  eyes = 2;

  static isMammal() {}
  describe() {}
}

class Monkey extends Animal {
  static knownMonkeys = [];
  height;
  weight;

  static isCute() {}
  eatBanana() {}
}

const animal = new Animal();
console.log(Object.getOwnPropertyNames(animal)); // ['mammal',eyes]
console.log(Object.getOwnPropertyNames(animal.__proto__)); //['constructor','describe']
console.log(Object.getOwnPropertyNames(Animal)); //[ 'length', 'name', 'prototype', 'isMammal', 'knownMammals' ]
console.log(Object.getOwnPropertyNames(Animal.__proto__)); //[ 'length','name', 'arguments','caller','constructor', 'apply','bind', 'call', 'toString']
//Function.prototype

const monkey = new Monkey();
console.log(Object.getOwnPropertyNames(monkey)); //[ 'mammal', 'eyes', 'height', 'weight' ]
console.log(Object.getOwnPropertyNames(monkey.__proto__)); //[ 'constructor', 'eatBanana' ]
console.log(Object.getOwnPropertyNames(Monkey)); //[ 'length', 'name', 'prototype', 'isCute', 'knownMonkeys' ]
console.log(Object.getOwnPropertyNames(Monkey.__proto__)); //[ 'length', 'name', 'prototype', 'isMammal', 'knownMammals' ]
