// Define an array
let numbers: number[] = [1, 2, 3, 4, 5];

// Try to access an element at an index that doesn't exist (index out of bounds)
console.log("In this code, the statement console.log(numbers[10]); tries to access an element at index 10,\nwhich doesn't exist in the array numbers. This will produce an index error.");
console.log("To correct the error, you would need to ensure that you're accessing a valid index within the bounds of the array such as:");
console.log("`console.log(numbers[2]);`, to print the value at index 2.");
console.log(numbers[10]); // Intentional index error
