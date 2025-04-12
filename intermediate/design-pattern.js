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