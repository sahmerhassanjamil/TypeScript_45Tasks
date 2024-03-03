// Define a function called show_magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Make an array of magician's names
let magicians: string[] = ['Harry Potter', 'Lord Voldemort', 'Albus Dumbeldore', 'Severus Snape'];

// Call the function to show the magicians
show_magicians(magicians);
