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
