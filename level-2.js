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
  
  
  // ===== INHERITANCE =====
  // Inheritance allows a class to inherit properties and methods from another class
  
  // ES6 Class Inheritance
  class Employee extends User {
    constructor(username, email, position, salary) {
      // Call parent constructor
      super(username, email);
      
      // Add own properties
      this.position = position;
      this.salary = salary;
    }
    
    // Override parent method
    login() {
      const parentResult = super.login(); // Call parent method
      return `${parentResult} as ${this.position}`;
    }
    
    // Add new methods
    promote(newPosition) {
      this.position = newPosition;
      this.salary *= 1.1; // 10% raise
      return `${this.username} has been promoted to ${this.position}`;
    }
  }
  
  const employee1 = new Employee("john", "john@company.com", "Developer", 80000);
  console.log(employee1.login()); // "john has logged in as Developer"
  console.log(employee1.promote("Senior Developer")); // "john has been promoted to Senior Developer"
  
  
  // ===== ABSTRACTION =====
  // Abstraction means hiding complex implementation details and showing only necessary features
  
  // Abstract class - not directly instantiable, serves as a template
  class Vehicle {
    constructor(make, model) {
      // Prevent direct instantiation
      if (this.constructor === Vehicle) {
        throw new Error("Vehicle is an abstract class and cannot be instantiated directly.");
      }
      
      this.make = make;
      this.model = model;
    }
    
    // Abstract method - must be implemented by child classes
    startEngine() {
      throw new Error("Method 'startEngine()' must be implemented.");
    }
    
    // Concrete method - shared by all child classes
    getDetails() {
      return `${this.make} ${this.model}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, doors) {
      super(make, model);
      this.doors = doors;
    }
    
    // Implement abstract method
    startEngine() {
      return `The ${this.getDetails()} car engine starts.`;
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(make, model, type) {
      super(make, model);
      this.type = type;
    }
    
    // Implement abstract method
    startEngine() {
      return `The ${this.getDetails()} motorcycle engine roars to life.`;
    }
  }
  
  // const vehicle = new Vehicle("Generic", "Vehicle"); // Error: Vehicle is an abstract class
  const car = new Car("Toyota", "Camry", 4);
  const motorcycle = new Motorcycle("Harley", "Davidson", "Cruiser");
  
  console.log(car.startEngine()); // "The Toyota Camry car engine starts."
  console.log(motorcycle.startEngine()); // "The Harley Davidson motorcycle engine roars to life."
  
  
  // ===== ENCAPSULATION =====
  // Encapsulation is bundling data and methods that operate on the data within a single unit
  // and restricting access to some of the object's components
  
  // Using closures for private variables (ES5 approach)
  function BankAccount(initialBalance) {
    // Private variable (not accessible outside)
    let balance = initialBalance;
    
    // Public interface
    return {
      deposit: function(amount) {
        if (amount > 0) {
          balance += amount;
          return `Deposited ${amount}. New balance: ${balance}`;
        }
        return "Invalid amount";
      },
      
      withdraw: function(amount) {
        if (amount > 0 && amount <= balance) {
          balance -= amount;
          return `Withdrew ${amount}. New balance: ${balance}`;
        }
        return "Invalid amount or insufficient funds";
      },
      
      getBalance: function() {
        return balance;
      }
    };
  }
  
  const account = BankAccount(1000);
  console.log(account.getBalance()); // 1000
  console.log(account.deposit(500)); // "Deposited 500. New balance: 1500"
  console.log(account.withdraw(200)); // "Withdrew 200. New balance: 1300"
  // console.log(account.balance); // undefined (private variable)
  
  // Private fields in classes (ES2022)
  class ModernBankAccount {
    // Private field (with # prefix)
    #balance;
    
    constructor(initialBalance) {
      this.#balance = initialBalance;
      this.accountNumber = Math.floor(Math.random() * 1000000);
    }
    
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        return `Deposited ${amount}. New balance: ${this.#balance}`;
      }
      return "Invalid amount";
    }
    
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        return `Withdrew ${amount}. New balance: ${this.#balance}`;
      }
      return "Invalid amount or insufficient funds";
    }
    
    get balance() {
      return this.#balance;
    }
    
    // Private method
    #calculateInterest(rate) {
      return this.#balance * rate / 100;
    }
    
    addYearlyInterest(rate) {
      const interest = this.#calculateInterest(rate);
      this.#balance += interest;
      return `Added yearly interest: ${interest}. New balance: ${this.#balance}`;
    }
  }
  
  // Note: Private fields (#) require modern browsers or Node.js v12+
  // In coding tests, you might want to stick with closure approach for better compatibility
  
  
  // ===== POLYMORPHISM =====
  // Polymorphism means objects of different classes can be treated as objects of a common super class
  // The most common use is through method overriding
  
  // Parent class
  class Shape {
    constructor(name) {
      this.name = name;
    }
    
    calculateArea() {
      return 0; // Base implementation
    }
    
    describe() {
      return `This is a ${this.name} with area: ${this.calculateArea()}`;
    }
  }
  
  // Child classes
  class Circle extends Shape {
    constructor(radius) {
      super("circle");
      this.radius = radius;
    }
    
    // Override method
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super("rectangle");
      this.width = width;
      this.height = height;
    }
    
    // Override method
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super("triangle");
      this.base = base;
      this.height = height;
    }
    
    // Override method
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  // Polymorphic function - works with any Shape
  function printShapeInfo(shape) {
    if (shape instanceof Shape) {
      console.log(shape.describe());
    } else {
      console.log("Not a valid shape");
    }
  }
  
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  const triangle = new Triangle(3, 8);
  
  // Same function works with different shape types
  printShapeInfo(circle); // "This is a circle with area: 78.53981633974483"
  printShapeInfo(rectangle); // "This is a rectangle with area: 24"
  printShapeInfo(triangle); // "This is a triangle with area: 12"
  
  
  // ===== INTERFACES AND COMPOSITION =====
  // JavaScript doesn't have formal interfaces, but we can implement similar concepts
  
  // Duck typing - "If it walks like a duck and quacks like a duck, it's a duck"
  // Objects are compatible if they have the same methods/properties, regardless of their actual types
  
  // Composition over inheritance
  // Instead of complex inheritance hierarchies, we can compose objects from smaller parts
  
  // Mixins - a way to add functionality to classes
  const FlyableMixin = {
    fly() {
      return `${this.name} is flying`;
    },
    
    land() {
      return `${this.name} has landed`;
    }
  };
  
  const SwimmableMixin = {
    swim() {
      return `${this.name} is swimming`;
    }
  };
  
  // Apply mixins to a class
  class Bird {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Extend prototype with mixins
  Object.assign(Bird.prototype, FlyableMixin);
  
  class Duck extends Bird {
    constructor(name) {
      super(name);
    }
  }
  
  // Add swimming capability to Duck
  Object.assign(Duck.prototype, SwimmableMixin);
  
  const eagle = new Bird("Eagle");
  console.log(eagle.fly()); // "Eagle is flying"
  
  const duck = new Duck("Donald");
  console.log(duck.fly()); // "Donald is flying"
  console.log(duck.swim()); // "Donald is swimming"
  
  // Modern approach using composition
  function createBird(name) {
    return {
      name,
      eat() {
        return `${name} is eating`;
      }
    };
  }
  
  function addFlyingAbility(bird) {
    return {
      ...bird,
      fly() {
        return `${bird.name} is flying`;
      },
      land() {
        return `${bird.name} has landed`;
      }
    };
  }
  
  function addSwimmingAbility(bird) {
    return {
      ...bird,
      swim() {
        return `${bird.name} is swimming`;
      }
    };
  }
  
  // Create birds with different abilities
  const sparrow = addFlyingAbility(createBird("Sparrow"));
  const rubberDuck = addSwimmingAbility(createBird("Rubber Duck"));
  const realDuck = addSwimmingAbility(addFlyingAbility(createBird("Mallard")));
  
  console.log(sparrow.fly()); // "Sparrow is flying"
  console.log(rubberDuck.swim()); // "Rubber Duck is swimming"
  console.log(realDuck.fly()); // "Mallard is flying"
  console.log(realDuck.swim()); // "Mallard is swimming"
  
  
  // ===== DESIGN PATTERNS =====
  // Common solutions to recurring design problems
  
  // 1. Singleton Pattern - ensures a class has only one instance
  const Database = (function() {
    let instance;
    
    function createInstance() {
      return {
        data: [],
        add(item) {
          this.data.push(item);
        },
        remove(index) {
          this.data.splice(index, 1);
        },
        getAll() {
          return [...this.data];
        }
      };
    }
    
    return {
      getInstance() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  const db1 = Database.getInstance();
  const db2 = Database.getInstance();
  console.log(db1 === db2); // true - same instance
  
  // 2. Factory Pattern - creates objects without specifying the exact class
  function createUser(type, userData) {
    switch(type) {
      case 'regular':
        return new RegularUser(userData.name, userData.email);
      case 'admin':
        return new AdminUser(userData.name, userData.email, userData.permissions);
      case 'guest':
        return new GuestUser();
      default:
        throw new Error('Invalid user type');
    }
  }
  
  // 3. Observer Pattern - one-to-many dependency where subjects notify observers
  class EventEmitter {
    constructor() {
      this.events = {};
    }
    
    on(event, listener) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
    }
    
    emit(event, ...args) {
      if (this.events[event]) {
        this.events[event].forEach(listener => listener(...args));
      }
    }
    
    off(event, listener) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(l => l !== listener);
      }
    }
  }