// Store the original list of people you'd like to invite to dinner
let originalGuestList: string[] = ["Imran Khan", "Dada Jan", "Shakeela Aunty"];

// Print the name of the guest who can't make it
let guestWhoCantMakeIt: string = "Dada Jan";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Modify the list, replacing the name of the guest who can't make it with the name of the new person you are inviting
let newGuestList: string[] = originalGuestList.map(person => person === guestWhoCantMakeIt ? "Shapaatar Hamza" : person);

// Print a second set of invitation messages
newGuestList.forEach(person => {
    console.log(`Dear ${person}, you are cordially invited to dinner at my place.`);
});
