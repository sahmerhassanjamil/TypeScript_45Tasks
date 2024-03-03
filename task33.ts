// Store the names of favorite pizzas in an array
let pizzas: string[] = ['Pepperoni', 'Margherita', 'Hawaiian'];

// Use a for loop to print the name of each pizza
for (let pizza of pizzas) {
    console.log(pizza);
}

// Modify the for loop to print a sentence using the name of the pizza
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Add a line outside the for loop to state how much you like pizza
console.log("I really love pizza!");
