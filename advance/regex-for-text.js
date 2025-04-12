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
