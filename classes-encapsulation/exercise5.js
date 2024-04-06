/*
       1. If you were to design your own class for your
       project, what questions would you ask while 
       deciding whether to make something a static or
       instance field/method/property?

    2. How about private or public accessors for these
       static or instance fields/methods/properties?
*/

/*
   1. When deciding whether to make something a static or instance field/method/property, you should consider the following questions:
      - Does the field/method/property need to be shared among all instances of the class? If yes, it should be static. If not, it should be an instance field/method/property.
      - Does the field/method/property require access to instance-specific data? If yes, it should be an instance field/method/property. If not, it can be static.
      - Does the field/method/property represent a behavior or characteristic of the class as a whole? If yes, it should be static. If it represents a behavior or characteristic of individual instances, it should be an instance field/method/property.

   2. When deciding between private or public accessors for static or instance fields/methods/properties, you should consider the following:
      - Does the field/method/property need to be accessed or modified from outside the class? If yes, it should have a public accessor. If it should only be accessed or modified within the class, it should have a private accessor.
      - Does the field/method/property need to be accessed or modified by subclasses? If yes, it should have a protected accessor. If it should only be accessed or modified within the class, it should have a private accessor.

   Example:

   class Car {
      static totalCars = 0; // static field

      constructor(brand) {
         this.brand = brand; // instance field
         Car.totalCars++; // accessing static field
      }

      static getTotalCars() { // static method
         return Car.totalCars;
      }

      getBrand() { // instance method with public accessor
         return this.brand;
      }

      setBrand(newBrand) { // instance method with public accessor
         this.brand = newBrand;
      }

      #privateMethod() { // private instance method
         // do something
      }
   }

   const car1 = new Car('Toyota');
   const car2 = new Car('Honda');

   console.log(Car.getTotalCars()); // Output: 2
   console.log(car1.getBrand()); // Output: Toyota

   car1.setBrand('Ford');
   console.log(car1.getBrand()); // Output: Ford

   car1.#privateMethod(); // Error: private method cannot be accessed from outside the class
*/
