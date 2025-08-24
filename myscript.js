// Custom JavaScript Script
// Example function for demonstration

function greetUser(name) {
    return `Hello, ${name}! Welcome to our custom JavaScript repository.`;
}

function calculateSum(a, b) {
    return a + b;
}

// Example usage
console.log(greetUser('Developer'));
console.log('Sum of 5 and 3:', calculateSum(5, 3));

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { greetUser, calculateSum };
}
