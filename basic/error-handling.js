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