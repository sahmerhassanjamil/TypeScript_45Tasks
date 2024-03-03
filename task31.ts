// Make a list of current users
let current_users: string[] = ['alice', 'bob', 'charlie', 'david', 'emma'];

// Make another list of new users
let new_users: string[] = ['bob', 'diana', 'frank', 'emma', 'Hannah'];

// Loop through the new_users list
for (let new_user of new_users) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    let lowercase_current_users: string[] = current_users.map(user => user.toLowerCase());
    let lowercase_new_user: string = new_user.toLowerCase();

    // Check if the new username already exists in the current users list
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
