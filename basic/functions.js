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