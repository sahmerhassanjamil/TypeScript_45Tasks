import * as readlineSync from 'readline-sync';

// Make an array of usernames
let usernames: string[] = [];

// Add an if test to check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
    
    // Ask the user to input 5 usernames one by one
    for (let i = 0; i < 5; i++) {
        let username: string = readlineSync.question(`Please enter username ${i + 1}: `);
        usernames.push(username);
    }
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
} else {
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
}
