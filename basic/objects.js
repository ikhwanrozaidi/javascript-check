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
  