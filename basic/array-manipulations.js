// ===== ARRAYS =====

// Array creation
const fruits = ["apple", "banana", "orange"];

// Accessing elements
const firstFruit = fruits[0]; // "apple"
const lastFruit = fruits[fruits.length - 1]; // "orange"

// Adding elements
fruits.push("grape"); // Adds to the end: ["apple", "banana", "orange", "grape"]
fruits.unshift("melon"); // Adds to the beginning: ["melon", "apple", "banana", "orange", "grape"]

// Removing elements
const lastItem = fruits.pop(); // Removes and returns the last item "grape"
const firstItem = fruits.shift(); // Removes and returns the first item "melon"

// Finding elements
const bananaIndex = fruits.indexOf("banana"); // 1
const containsOrange = fruits.includes("orange"); // true

// Iterating through arrays
fruits.forEach(function(fruit) {
  console.log(fruit); // Logs each fruit
});

// Mapping arrays (creates a new array)
const upperFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
}); // ["APPLE", "BANANA", "ORANGE"]

// Arrow function version
const upperFruits2 = fruits.map(fruit => fruit.toUpperCase());

// Filtering arrays (creates a new array)
const longFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
}); // ["banana", "orange"]

// Arrow function version
const longFruits2 = fruits.filter(fruit => fruit.length > 5);

// Slicing arrays (creates a new array)
const someFruits = fruits.slice(1, 3); // ["banana", "orange"]

// Joining arrays
const fruitString = fruits.join(", "); // "apple, banana, orange"

// Spreading arrays
const moreFruits = ["kiwi", "mango"];
const allFruits = [...fruits, ...moreFruits]; // ["apple", "banana", "orange", "kiwi", "mango"]
