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