// ===== VARIABLES AND DATA TYPES =====

// Variable declaration with var, let, const
var oldWay = "This is the old way"; // Function scoped, can be redeclared
let modern = "Modern variable"; // Block scoped, can be reassigned
const constant = "Cannot be reassigned"; // Block scoped, cannot be reassigned

// Data types
const string = "This is a string";
const number = 42;
const decimal = 42.5;
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;
const array = [1, 2, 3, 4];
const object = { name: "John", age: 30 };

// Type checking
console.log(typeof string); // "string"
console.log(typeof number); // "number"
console.log(typeof boolean); // "boolean"
console.log(typeof nullValue); // "object" (JavaScript quirk)
console.log(typeof undefinedValue); // "undefined"
console.log(typeof array); // "object"
console.log(typeof object); // "object"
console.log(Array.isArray(array)); // true - proper way to check for arrays