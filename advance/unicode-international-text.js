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
  