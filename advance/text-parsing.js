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
