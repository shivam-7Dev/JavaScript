/*
    Let's see how a "Factory" class/function might work

    1. Create a class called "EnemyFactory"

    2. Make the following work to produce the output shown:

    const factory = new EnemyFactory();
    const flying = factory.generateFlyingEnemy("batman");
    flying.fly(); // batman can fly!

    const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
    swimming.swim(); // aquaman can swim!

    * What is the difference between these two? When might you
      even use this? Where are the property keys of each of these:
      - EnemyFactory
      - factory
      - factory.__proto__
      - flying.__proto__
      - swimming.__proto__
*/

// class EnemyFactory {
//   constructor() {}
//   generateFlyingEnemy(name) {
//     return {
//       fly() {
//         console.log(`${name} can fly`);
//       },
//     };
//   }
//   static generateSwimmingEnemy(name) {
//     return {
//       swim() {
//         console.log(`${name} can fly`);
//       },
//     };
//   }
// }

//doing the above using the factory class
class EnemyFactory {
  constructor() {}

  generateFlyingEnemy(name) {
    class GenerateFlyingEnemy {
      constructor(name) {
        this.name = name;
      }
      fly() {
        console.log(`${this.name} can fly`);
      }
    }
    return new GenerateFlyingEnemy(name);
  }

  static generateSwimmingEnemy(name) {
    class GenerateSwimmingEnemy {
      constructor(name) {
        this.name = name;
      }
      swim() {
        console.log(`${this.name} can swim`);
      }
    }
    return new GenerateSwimmingEnemy(name);
  }
}

const factory = new EnemyFactory();
const flying = factory.generateFlyingEnemy("batman");
flying.fly(); // batman can fly!

const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
swimming.swim(); // aquaman can swim!

console.log("EnemyFactory", Object.getOwnPropertyNames(EnemyFactory));
console.log("factory=>", Object.getOwnPropertyNames(factory));
console.log("factory.__proto__", Object.getOwnPropertyNames(factory.__proto__));
console.log(
  "swimming.__proto__",
  Object.getOwnPropertyNames(swimming.__proto__)
);
