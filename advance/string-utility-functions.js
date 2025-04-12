// ===== 6. ADVANCED STRING METHODS AND UTILITY FUNCTIONS =====

// Find all occurrences of a substring
function findAllOccurrences(text, substring) {
const positions = [];
let pos = text.indexOf(substring);

while (pos !== -1) {
    positions.push(pos);
    pos = text.indexOf(substring, pos + 1);
}

return positions;
}

console.log(findAllOccurrences("banana", "an")); // [1, 3]

// Truncate text with ellipsis
function truncateText(text, maxLength) {
if (text.length <= maxLength) {
    return text;
}

// Try to truncate at a word boundary
const truncated = text.substr(0, maxLength);
const lastSpace = truncated.lastIndexOf(' ');

if (lastSpace > maxLength * 0.8) {
    // If a space is found in the last 20% of the text, truncate there
    return truncated.substr(0, lastSpace) + '...';
}

// Otherwise truncate at the exact length
return truncated + '...';
}

console.log(truncateText("This is a long sentence that needs to be truncated.", 20));
// "This is a long..."

// Word count and frequency analysis
function wordFrequency(text) {
// Clean the text and split into words
const words = text.toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .split(/\s+/); // Split by whitespace

// Count frequency
return words.reduce((freq, word) => {
    if (word) {
    freq[word] = (freq[word] || 0) + 1;
    }
    return freq;
}, {});
}

const sampleText = "The quick brown fox jumps over the lazy dog. The dog was not very lazy.";
console.log(wordFrequency(sampleText));
/*
{
the: 3,
quick: 1,
brown: 1,
fox: 1,
jumps: 1,
over: 1,
lazy: 2,
dog: 2,
was: 1,
not: 1,
very: 1
}
*/

// Generate a slug for URLs
function generateSlug(text) {
return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Trim hyphens from start and end
}

console.log(generateSlug("10 JavaScript Tips & Tricks!")); // "10-javascript-tips-tricks"

// Password strength checker
function checkPasswordStrength(password) {
const criteria = [
    // Length >= 8 characters
    password.length >= 8,
    // Contains uppercase
    /[A-Z]/.test(password),
    // Contains lowercase
    /[a-z]/.test(password),
    // Contains numbers
    /[0-9]/.test(password),
    // Contains special characters
    /[^A-Za-z0-9]/.test(password)
];

// Count passed criteria
const passedCriteria = criteria.filter(Boolean).length;

// Return strength as a percentage
return (passedCriteria / criteria.length) * 100;
}

console.log("Password strength:", checkPasswordStrength("Passw0rd!") + "%"); // 100%
console.log("Password strength:", checkPasswordStrength("password") + "%"); // 40%
