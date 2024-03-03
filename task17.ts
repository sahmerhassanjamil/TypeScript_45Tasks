// Store the locations you'd like to visit in an array
let placesToVisit: string[] = ["Tokyo", "Paris", "Winterfell", "Kings Landing", "Banff National Park"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order by printing it
console.log("Original order after sorting:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order by printing it again
console.log("Original order after reverse sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print the array to show that its order has changed
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print the list to show it’s back to its original order
console.log("Back to original order:", placesToVisit);

// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();

// Print the array to show that its order has been changed
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort to change the array so it’s stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));

// Print the list to show that its order has changed
console.log("Sorted in reverse alphabetical order:", placesToVisit);
