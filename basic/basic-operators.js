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