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
  