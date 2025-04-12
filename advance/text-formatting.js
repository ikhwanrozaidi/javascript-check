// ===== 1. TEXT FORMATTING AND CASE HANDLING =====

// Standardizing text case
function standardizeNames(names) {
// Split the input into an array of names
const nameArray = Array.isArray(names) ? names : [names];

return nameArray.map(name => {
    // Handle empty input
    if (!name || typeof name !== 'string') return '';
    
    // Split the name by spaces to handle multi-word names
    return name
    .split(' ')
    .map(part => {
        // Skip empty parts
        if (!part) return '';
        
        // For each part, capitalize first letter and lowercase the rest
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join(' ');
});
}

// Example: Formatting names
const formattedNames = standardizeNames(["aNna Jobling", "JohnDoe"]);
console.log(formattedNames); // ["Anna Jobling", "John Doe"]

// Parsing CamelCase names
function parseCamelCase(text) {
// Insert a space before each capital letter that isn't the first character
const spaced = text.replace(/([a-z])([A-Z])/g, '$1 $2');
// Capitalize the first letter and lowercase the rest
return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

console.log(parseCamelCase("johnDoe")); // "John Doe"
console.log(parseCamelCase("userFirstName")); // "User First Name"

// Title case (capitalize first letter of each word)
function toTitleCase(text) {
return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(toTitleCase("the quick brown fox")); // "The Quick Brown Fox"
