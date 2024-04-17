const mySymbol = Symbol();
const namedSymbol = Symbol("monkey");

console.log(mySymbol);
console.log(namedSymbol);

console.log(typeof mySymbol);
console.log(typeof namedSymbol);
console.log(typeof "hello");

console.log(Symbol() === mySymbol);
console.log(Symbol("monkey") === namedSymbol);
console.log(mySymbol === mySymbol);
console.log(mySymbol.description);
console.log(namedSymbol.description);

/**
 * The role of the symbol is to hide the functionality inside the object.
 * Symbols are guaranteed unique values.
 * Symbol properties are not iterable using for...of loop.
 * Symbols can be used as keys for object properties, providing a level of privacy and preventing accidental property name collisions.
 * Symbols can be used to define well-known symbols, such as Symbol.iterator, which allows objects to be iterated over with the for...of loop.
 * Symbols can be used to define custom iterator methods on objects.
 * Symbols can be used to create private members in classes.
 * Symbols can be used to define meta-programming operations, such as Symbol.toPrimitive, Symbol.toStringTag, etc.
 * Symbols can be used to implement custom behavior for built-in JavaScript operations, such as Symbol.hasInstance, Symbol.match, Symbol.replace, etc.
 * Symbols can be used to create unique method names in mixins or multiple inheritance scenarios.
 */
