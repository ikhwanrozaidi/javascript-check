// ===== LOOPS =====

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
  }
  
  // While loop
  let j = 0;
  while (j < 5) {
    console.log(j); // 0, 1, 2, 3, 4
    j++;
  }
  
  // Do-while loop (always executes at least once)
  let k = 0;
  do {
    console.log(k); // 0, 1, 2, 3, 4
    k++;
  } while (k < 5);
  
  // For...of loop (iterates over values in an array)
  const numbers = [1, 2, 3, 4, 5];
  for (const num of numbers) {
    console.log(num); // 1, 2, 3, 4, 5
  }
  
  // For...in loop (iterates over properties in an object)
  const person = { name: "John", age: 30, job: "Developer" };
  for (const prop in person) {
    console.log(`${prop}: ${person[prop]}`); // "name: John", "age: 30", "job: Developer"
  }