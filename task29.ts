// Make an array of usernames
let usernames: string[] = ['admin', 'Hamza', 'Ahmer', 'Satkelay', 'Ballu'];

// Loop through the array and print a greeting to each user
for (let username of usernames) {
    // Check if the username is 'admin'
    if (username === 'admin') {
        // Print a special greeting for the admin user
        console.log("Hello admin, would you like to see a status report?");
    } else {
        // Print a generic greeting for other users
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
