function Factorial(n) {
    if (n < 0) {
        return -1; // Factorial is not defined for negative numbers 
    } else if (n === 0 || n === 1) {
        return 1; // Base case: 0! = 1 and 1! = 1
    } else {
        return n * Factorial(n - 1); // Recursive case
    }   

}

// Example usage:
console.log(Factorial(5)); // Output: 120
console.log(Factorial(0)); // Output: 1
console.log(Factorial(-3)); // Output: -1