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
