/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)

    2. Log out all the properties within the Array
       prototype. (Only it's own properties)

    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?
*/
console.log(Object.getOwnPropertyNames(Object.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype.__proto__));
//printing protoType chain
let arr = [];
console.log(arr.__proto__ === Array.prototype);
let proto = arr.__proto__;
while (proto) {
  console.log(Object.getOwnPropertyNames(proto));
  proto = Object.getPrototypeOf(proto);
}
