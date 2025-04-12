// ===== OBJECT-ORIENTED PROGRAMMING IN JAVASCRIPT =====

// JavaScript supports Object-Oriented Programming (OOP) through:
// 1. Constructor functions and prototypes (ES5)
// 2. Classes (ES6+)

// ===== 1. CONSTRUCTOR FUNCTIONS AND PROTOTYPES (ES5) =====

// Constructor function
function Person(firstName, lastName, age) {
    // Properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
    // Method defined inside constructor
    this.getFullName = function() {
      return `${this.firstName} ${this.lastName}`;
    };
  }
  
  // Method defined on prototype (more efficient as it's shared across instances)
  Person.prototype.greet = function() {
    return `Hello, my name is ${this.getFullName()} and I'm ${this.age} years old.`;
  };
  
  // Static method (belongs to constructor, not instances)
  Person.isAdult = function(age) {
    return age >= 18;
  };
  
  // Creating instances
  const person1 = new Person("John", "Doe", 30);
  const person2 = new Person("Jane", "Smith", 25);
  
  console.log(person1.getFullName()); // "John Doe"
  console.log(person2.greet()); // "Hello, my name is Jane Smith and I'm 25 years old."
  console.log(Person.isAdult(20)); // true
  
  
  // ===== 2. CLASSES (ES6+) =====
  
  // Class declaration
  class User {
    // Constructor (initialize properties)
    constructor(username, email) {
      this.username = username;
      this.email = email;
      this._isLoggedIn = false; // Convention for "private" properties (not truly private)
    }
    
    // Instance methods
    login() {
      this._isLoggedIn = true;
      return `${this.username} has logged in`;
    }
    
    logout() {
      this._isLoggedIn = false;
      return `${this.username} has logged out`;
    }
    
    // Getter - access properties with special logic
    get isLoggedIn() {
      return this._isLoggedIn;
    }
    
    // Setter - set properties with validation/logic
    set email(newEmail) {
      if (!newEmail.includes('@')) {
        throw new Error('Invalid email format');
      }
      this._email = newEmail;
    }
    
    get email() {
      return this._email;
    }
    
    // Static method - called on the class itself, not instances
    static validateUsername(username) {
      return username.length >= 3;
    }
  }
  
  const user1 = new User("alice", "alice@example.com");
  console.log(user1.login()); // "alice has logged in"
  console.log(user1.isLoggedIn); // true
  console.log(User.validateUsername("bob")); // true