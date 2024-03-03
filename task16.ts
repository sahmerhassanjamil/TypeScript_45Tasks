// Store the original list of people you'd like to invite to dinner
let originalGuestList: string[] = ["Nazim","Imran Khan", "Chusara", "Dada Jan", "Shakeela Aunty", "Ballu"];

// Print a message saying that you can invite only two people for dinner
console.log("Sorry, the new dinner table won’t arrive in time, and we have space for only two guests for dinner.");

// Remove guests from the list until only two names remain
while (originalGuestList.length > 2) {
    // Remove the last guest from the list
    let removedGuest: string = originalGuestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list, letting them know they’re still invited
originalGuestList.forEach(person => {
    console.log(`Dear ${person}, you're still invited to dinner at my place.`);
});

// Remove the last two names from your list
originalGuestList.splice(0, originalGuestList.length);

// Print your list to make sure you actually have an empty list at the end of your program
console.log("Updated guest list:", originalGuestList);
