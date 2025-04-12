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


// ===== BASIC OPERATORS =====

// Arithmetic operators
const sum = 5 + 10; // 15
const difference = 10 - 5; // 5
const product = 5 * 10; // 50
const quotient = 10 / 5; // 2
const remainder = 10 % 3; // 1 (modulus)
const power = 2 ** 3; // 8 (exponentiation)

// Increment and decrement
let counter = 0;
counter++; // counter is now 1
counter--; // counter is now 0

// Assignment operators
let x = 5;
x += 3; // Same as x = x + 3
x -= 2; // Same as x = x - 2
x *= 4; // Same as x = x * 4
x /= 2; // Same as x = x / 2
x %= 3; // Same as x = x % 3

// Comparison operators
console.log(5 == "5"); // true (loose equality, compares value)
console.log(5 === "5"); // false (strict equality, compares value and type)
console.log(5 != "5"); // false (loose inequality)
console.log(5 !== "5"); // true (strict inequality)
console.log(5 > 3); // true (greater than)
console.log(5 >= 5); // true (greater than or equal)
console.log(3 < 5); // true (less than)
console.log(5 <= 5); // true (less than or equal)

// Logical operators
const trueVal = true;
const falseVal = false;
console.log(trueVal && falseVal); // false (logical AND)
console.log(trueVal || falseVal); // true (logical OR)
console.log(!trueVal); // false (logical NOT)


// ===== ARRAYS =====

// Array creation
const fruits = ["apple", "banana", "orange"];

// Accessing elements
const firstFruit = fruits[0]; // "apple"
const lastFruit = fruits[fruits.length - 1]; // "orange"

// Adding elements
fruits.push("grape"); // Adds to the end: ["apple", "banana", "orange", "grape"]
fruits.unshift("melon"); // Adds to the beginning: ["melon", "apple", "banana", "orange", "grape"]

// Removing elements
const lastItem = fruits.pop(); // Removes and returns the last item "grape"
const firstItem = fruits.shift(); // Removes and returns the first item "melon"

// Finding elements
const bananaIndex = fruits.indexOf("banana"); // 1
const containsOrange = fruits.includes("orange"); // true

// Iterating through arrays
fruits.forEach(function(fruit) {
  console.log(fruit); // Logs each fruit
});

// Mapping arrays (creates a new array)
const upperFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
}); // ["APPLE", "BANANA", "ORANGE"]

// Arrow function version
const upperFruits2 = fruits.map(fruit => fruit.toUpperCase());

// Filtering arrays (creates a new array)
const longFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
}); // ["banana", "orange"]

// Arrow function version
const longFruits2 = fruits.filter(fruit => fruit.length > 5);

// Slicing arrays (creates a new array)
const someFruits = fruits.slice(1, 3); // ["banana", "orange"]

// Joining arrays
const fruitString = fruits.join(", "); // "apple, banana, orange"

// Spreading arrays
const moreFruits = ["kiwi", "mango"];
const allFruits = [...fruits, ...moreFruits]; // ["apple", "banana", "orange", "kiwi", "mango"]


// ===== CONDITIONAL STATEMENTS =====

// If statement
if (5 > 3) {
  console.log("5 is greater than 3");
}

// If-else statement
if (5 < 3) {
  console.log("This won't execute");
} else {
  console.log("5 is not less than 3");
}

// If-else if-else statement
const score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// Ternary operator (condition ? trueExpression : falseExpression)
const age = 20;
const canVote = age >= 18 ? "Yes" : "No"; // "Yes"

// Switch statement
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("End of work week");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Midweek");
}


// ===== LOOPS =====

// For loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// While loop
let j = 0;
while (j < 5) {
  console.log(j); // 0, 1, 2, 3, 4
  j++;
}

// Do-while loop (always executes at least once)
let k = 0;
do {
  console.log(k); // 0, 1, 2, 3, 4
  k++;
} while (k < 5);

// For...of loop (iterates over values in an array)
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num); // 1, 2, 3, 4, 5
}

// For...in loop (iterates over properties in an object)
const person = { name: "John", age: 30, job: "Developer" };
for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`); // "name: John", "age: 30", "job: Developer"
}


// ===== FUNCTIONS =====

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("John")); // "Hello, John!"

// Function expression
const sayGoodbye = function(name) {
  return `Goodbye, ${name}!`;
};
console.log(sayGoodbye("John")); // "Goodbye, John!"

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

// Arrow function with block body
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};
console.log(divide(6, 2)); // 3

// Default parameters
function greetWithDefault(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greetWithDefault()); // "Hello, Guest!"

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Void function (doesn't return a value)
function logMessage(message) {
  console.log(message);
  // No return statement
}
const result = logMessage("This is a log"); // undefined

// Immediately Invoked Function Expression (IIFE)
(function() {
  const privateVar = "I am private";
  console.log(privateVar);
})(); // "I am private"


// ===== OBJECTS =====

// Object creation
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  
  // Method
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Shorthand method
  greet() {
    return `Hello, I'm ${this.getFullName()}`;
  }
};

// Accessing properties
console.log(user.firstName); // "John"
console.log(user["lastName"]); // "Doe"

// Modifying properties
user.age = 31;
user["email"] = "john.doe@example.com";

// Adding new properties
user.isActive = true;

// Deleting properties
delete user.isActive;

// Object destructuring
const { firstName, lastName, age: userAge } = user;
console.log(firstName); // "John"
console.log(lastName); // "Doe"
console.log(userAge); // 31

// Spread operator with objects
const userDetails = {
  address: "123 Main St",
  phone: "555-1234"
};
const completeUser = { ...user, ...userDetails };

// Object.keys, Object.values, Object.entries
console.log(Object.keys(user)); // ["firstName", "lastName", "age", "email", "getFullName", "greet"]
console.log(Object.values(user)); // ["John", "Doe", 31, "john.doe@example.com", ƒ, ƒ]
console.log(Object.entries(user)); // [["firstName", "John"], ["lastName", "Doe"], ...]


// ===== ERROR HANDLING =====

// Try-catch
try {
  // Code that might throw an error
  const value = undefinedVariable; // This will throw a ReferenceError
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This always executes");
}

// Throwing custom errors
function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message); // "Cannot divide by zero"
}