// ===== CONDITIONAL STATEMENTS =====

// If statement
if (5 > 3) {
    console.log("5 is greater than 3");
  }
  
  // If-else statement
  if (5 < 3) {
    console.log("This won't execute");
  } else {
    console.log("5 is not less than 3");
  }
  
  // If-else if-else statement
  const score = 85;
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else {
    console.log("F");
  }
  
  // Ternary operator (condition ? trueExpression : falseExpression)
  const age = 20;
  const canVote = age >= 18 ? "Yes" : "No"; // "Yes"
  
  // Switch statement
  const day = "Monday";
  switch (day) {
    case "Monday":
      console.log("Start of work week");
      break;
    case "Friday":
      console.log("End of work week");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Weekend");
      break;
    default:
      console.log("Midweek");
  }
  