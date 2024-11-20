function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return x / y;
}

// Example usage
try {
    console.log("Add: " + add(5, 3)); // Output: 8
    console.log("Subtract: " + subtract(5, 3)); // Output: 2
    console.log("Multiply: " + multiply(5, 3)); // Output: 15
    console.log("Divide: " + divide(5, 3)); // Output: 1.6666666666666667
} catch (error) {
    console.error(error.message);
}