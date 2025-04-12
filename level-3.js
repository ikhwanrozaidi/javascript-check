// ===== ADVANCED STRING MANIPULATION =====

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


// ===== 2. ADVANCED REGEX FOR TEXT PROCESSING =====

// Extract all email addresses from text
function extractEmails(text) {
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  return text.match(emailRegex) || [];
}

const emailText = "Contact us at support@example.com or sales@company.co.uk for more info.";
console.log(extractEmails(emailText)); // ["support@example.com", "sales@company.co.uk"]

// Format phone numbers
function formatPhoneNumber(phone) {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Check if it's a valid 10-digit US phone number
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  // Handle international numbers starting with country code
  if (cleaned.length > 10 && cleaned.startsWith('1')) {
    // US country code
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 11)}`;
  }
  
  // Return the original if format doesn't match
  return phone;
}

console.log(formatPhoneNumber("1234567890")); // "(123) 456-7890"
console.log(formatPhoneNumber("123-456-7890")); // "(123) 456-7890"
console.log(formatPhoneNumber("11234567890")); // "+1 (123) 456-7890"

// Format dates with regex
function formatDate(dateStr) {
  // Match patterns like YYYY-MM-DD, MM/DD/YYYY, DD.MM.YYYY
  const patterns = [
    // YYYY-MM-DD
    {
      regex: /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
      formatter: (_, year, month, day) => `${month}/${day}/${year}`
    },
    // MM/DD/YYYY
    {
      regex: /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
      formatter: (_, month, day, year) => `${month}/${day}/${year}`
    },
    // DD.MM.YYYY
    {
      regex: /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,
      formatter: (_, day, month, year) => `${month}/${day}/${year}`
    }
  ];
  
  for (const { regex, formatter } of patterns) {
    if (regex.test(dateStr)) {
      return dateStr.replace(regex, formatter);
    }
  }
  
  return dateStr; // Return original if no patterns match
}

console.log(formatDate("2023-04-15")); // "04/15/2023"
console.log(formatDate("04/15/2023")); // "04/15/2023" (already formatted)
console.log(formatDate("15.04.2023")); // "04/15/2023"


// ===== 3. STRING TEMPLATES AND INTERPOLATION =====

// Template literals for complex strings
function generateEmailTemplate(user, product, orderDetails) {
  return `
    Hello ${user.firstName},
    
    Thank you for your order of ${product.name}!
    
    Order Details:
    - Order ID: ${orderDetails.orderId}
    - Price: $${product.price.toFixed(2)}
    - Shipping to: ${user.address}
    
    Your order will be delivered by ${orderDetails.estimatedDelivery}.
    
    Best regards,
    The Team
  `;
}

const user = { firstName: "Jane", address: "123 Main St, City" };
const product = { name: "Wireless Headphones", price: 79.99 };
const orderDetails = { orderId: "ORD-12345", estimatedDelivery: "April 20, 2023" };

console.log(generateEmailTemplate(user, product, orderDetails));

// Tagged templates - custom string processing
function highlightKeywords(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] || '';
    const highlighted = typeof value === 'string' 
      ? `<span class="highlight">${value}</span>` 
      : value;
    return result + str + highlighted;
  }, '');
}

const product1 = "JavaScript";
const feature1 = "asynchronous programming";
const code1 = "async/await";

const highlightedText = highlightKeywords`Learn ${product1} ${feature1} with ${code1} syntax.`;
console.log(highlightedText);
// "Learn <span class="highlight">JavaScript</span> <span class="highlight">asynchronous programming</span> with <span class="highlight">async/await</span> syntax."


// ===== 4. WORKING WITH UNICODE AND INTERNATIONAL TEXT =====

// Handle emoji and other Unicode characters
function countCharacters(str) {
  // Split string into array of Unicode code points
  return [...str].length;
}

console.log("Length of 'café': " + "café".length); // 4 (standard length)
console.log("Characters in 'café': " + countCharacters("café")); // 4
console.log("Length of '🚀': " + "🚀".length); // 2 (emoji uses 2 code units)
console.log("Characters in '🚀': " + countCharacters("🚀")); // 1 (counts as one character)

// Normalize Unicode text (handle accents and diacritics)
function normalizeText(text) {
  // NFC: Canonical Decomposition followed by Canonical Composition
  return text.normalize('NFC');
}

// Compare strings regardless of accents
function compareIgnoreAccents(str1, str2) {
  // NFD: Canonical Decomposition
  // Then remove diacritical marks (accents) using regex
  const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  return normalize(str1) === normalize(str2);
}

console.log(compareIgnoreAccents("résumé", "resume")); // true


// ===== 5. ADVANCED TEXT PARSING AND PROCESSING =====

// Parse CSV text to array of objects
function parseCSV(csvText, delimiter = ',') {
  // Split by newlines to get rows
  const rows = csvText.trim().split('\n');
  
  // Get headers from first row
  const headers = rows[0].split(delimiter).map(header => header.trim());
  
  // Map remaining rows to objects
  return rows.slice(1).map(row => {
    const values = row.split(delimiter).map(value => value.trim());
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {});
  });
}

const csvData = `name,age,city
John Doe,30,New York
Jane Smith,25,Los Angeles
Bob Johnson,45,Chicago`;

console.log(parseCSV(csvData));
/*
[
  { name: 'John Doe', age: '30', city: 'New York' },
  { name: 'Jane Smith', age: '25', city: 'Los Angeles' },
  { name: 'Bob Johnson', age: '45', city: 'Chicago' }
]
*/

// Fuzzy text search (simple implementation)
function fuzzySearch(query, text) {
  query = query.toLowerCase();
  text = text.toLowerCase();
  
  let queryIndex = 0;
  let score = 0;
  let consecutive = 0;
  
  // Go through each character in text
  for (let i = 0; i < text.length; i++) {
    // If we've matched the entire query, break
    if (queryIndex >= query.length) break;
    
    if (text[i] === query[queryIndex]) {
      queryIndex++;
      consecutive++;
      // Give more weight to consecutive matches
      score += consecutive * 2;
    } else {
      consecutive = 0;
    }
  }
  
  // Return match percentage (0-100)
  return queryIndex === query.length ? Math.min(100, score) : 0;
}

console.log(fuzzySearch("jvscrt", "JavaScript")); // Returns a score > 0
console.log(fuzzySearch("pthon", "JavaScript")); // Returns 0


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


// ===== 7. ADVANCED ASYNCHRONOUS TEXT PROCESSING =====

// Process large text files in chunks
async function processLargeTextFile(file, chunkCallback, chunkSize = 1024 * 1024) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    let offset = 0;
    let results = [];
    
    // Process file in chunks
    const readNextChunk = () => {
      const blob = file.slice(offset, offset + chunkSize);
      reader.readAsText(blob);
    };
    
    // Handle chunk loading
    reader.onload = async (e) => {
      try {
        const chunk = e.target.result;
        
        // Process the chunk
        const result = await chunkCallback(chunk);
        results.push(result);
        
        // Move to next chunk
        offset += chunkSize;
        
        // Check if we've read the entire file
        if (offset >= file.size) {
          resolve(results);
        } else {
          // Read next chunk
          readNextChunk();
        }
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = reject;
    
    // Start reading
    readNextChunk();
  });
}

// Example usage (for demonstration):
/*
async function countLines(file) {
  let totalLines = 0;
  
  await processLargeTextFile(file, chunk => {
    // Count newlines in this chunk
    const lines = chunk.split('\n').length - 1;
    totalLines += lines;
    return lines;
  });
  
  return totalLines;
}
*/

// Debounced text processing (useful for search inputs)
function debounce(func, delay) {
  let timeout;
  
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Example: Debounced search
const debouncedSearch = debounce((query) => {
  console.log(`Searching for: ${query}`);
  // Actual search logic would go here
}, 300);

// Example usage:
// document.querySelector('#search').addEventListener('input', e => {
//   debouncedSearch(e.target.value);
// });


// ===== 8. ADVANCED TEXT MANIPULATION ALGORITHMS =====

// Levenshtein distance (edit distance between strings)
function levenshteinDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  
  // Create a matrix of size (m+1) x (n+1)
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Initialize first row and column
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  // Fill the matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // deletion
        dp[i][j - 1] + 1, // insertion
        dp[i - 1][j - 1] + cost // substitution
      );
    }
  }
  
  return dp[m][n];
}

console.log(levenshteinDistance("kitten", "sitting")); // 3

// Find longest common substring
function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  
  // Create a table of size m x n
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  let maxLength = 0;
  let endIndex = 0;
  
  // Fill the table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1;
        }
      }
    }
  }
  
  // Extract the substring
  return str1.substring(endIndex - maxLength + 1, endIndex + 1);
}

console.log(longestCommonSubstring("JavaScript", "TypeScript")); // "Script"

// Text compression (simple run-length encoding)
function runLengthEncode(text) {
  if (!text) return '';
  
  let result = '';
  let count = 1;
  let char = text[0];
  
  for (let i = 1; i < text.length; i++) {
    if (text[i] === char) {
      count++;
    } else {
      result += (count > 1 ? count : '') + char;
      char = text[i];
      count = 1;
    }
  }
  
  // Add the last run
  result += (count > 1 ? count : '') + char;
  
  return result;
}

function runLengthDecode(encoded) {
  return encoded.replace(/(\d+)([^0-9])/g, (match, count, char) => {
    return char.repeat(Number(count));
  });
}

console.log(runLengthEncode("AAABBBCCCCDDEEEE")); // "3A3B4C2D4E"
console.log(runLengthDecode("3A3B4C2D4E")); // "AAABBBCCCCDDEEEE"

// Text diff algorithm (simplified)
function simpleDiff(old, new_) {
  // Convert strings to arrays of words
  const oldWords = old.split(/\s+/);
  const newWords = new_.split(/\s+/);
  
  const diff = {
    added: [],
    removed: []
  };
  
  // Find words in new but not in old
  for (const word of newWords) {
    if (!oldWords.includes(word)) {
      diff.added.push(word);
    }
  }
  
  // Find words in old but not in new
  for (const word of oldWords) {
    if (!newWords.includes(word)) {
      diff.removed.push(word);
    }
  }
  
  return diff;
}

const oldText = "The quick brown fox jumps over the lazy dog";
const newText = "The quick brown cat jumps over the active dog";
console.log(simpleDiff(oldText, newText));
// { added: ['cat', 'active'], removed: ['fox', 'lazy'] }