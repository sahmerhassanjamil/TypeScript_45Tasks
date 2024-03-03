// Store the original list of people you'd like to invite to dinner
let originalGuestList: string[] = ["Imran Khan", "Dada Jan", "Shakeela Aunty"];

// Print a statement informing people about the bigger dinner table
console.log("Great news! We've found a bigger dinner table!");

// Add one new guest to the beginning of the array
originalGuestList.unshift("Nazim");

// Add one new guest to the middle of the array
originalGuestList.splice(Math.floor(originalGuestList.length / 2), 0, "Chusara");

// Use push() to add one new guest to the end of the list
originalGuestList.push("Ballu");

// Print a new set of invitation messages
originalGuestList.forEach(person => {
    console.log(`Dear ${person}, you are cordially invited to dinner at my place.`);
});
