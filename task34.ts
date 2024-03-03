// Store the names of three animals in an array
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];

// Use a for loop to print out the name of each animal
for (let animal of animals) {
    console.log(animal);
}

// Modify the program to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Add a line at the end of the program stating what these animals have in common
console.log("Any of these animals would make a great pet!");
