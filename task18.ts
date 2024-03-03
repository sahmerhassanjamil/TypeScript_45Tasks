// Store the list of people you'd like to invite to dinner
let guestList: string[] = ["Imran Khan", "Dada Jan", "Shakeela Aunty"];

// Print the number of people being invited to dinner
console.log(`You are inviting ${guestList.length} people to dinner.`);

// Print a message inviting each person to dinner
guestList.forEach(person => {
    console.log(`Dear ${person}, you are cordially invited to dinner at my place.`);
});
