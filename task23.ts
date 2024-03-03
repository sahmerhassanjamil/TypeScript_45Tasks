// Tests for equality and inequality with strings
let fruit: string = 'apple';
console.log("Is the fruit 'apple'? I predict True.");
console.log(fruit == 'apple');

let city: string = 'New York';
console.log("Is the city 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles');

// Tests using the lower case function
let color: string = 'RED';
console.log("Is the color 'red'? I predict True.");
console.log(color.toLowerCase() == 'red');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1: number = 10;
let number2: number = 5;

console.log("Is number1 equal to number2? I predict False.");
console.log(number1 == number2);

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
let temperature: number = 25;
console.log("Is the temperature between 20 and 30 degrees? I predict True.");
console.log(temperature > 20 && temperature < 30);

console.log("Is the temperature less than 0 or greater than 40 degrees? I predict False.");
console.log(temperature < 0 || temperature > 40);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the array? I predict True.");
console.log(fruits.indexOf('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the array? I predict True.");
console.log(!fruits.indexOf('grape'));
