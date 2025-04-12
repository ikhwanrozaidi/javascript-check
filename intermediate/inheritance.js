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
