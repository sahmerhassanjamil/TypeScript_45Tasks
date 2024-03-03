// Define a function called show_magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define a function called make_great
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Make an array of magician's names
let magicians: string[] = ['Harry Potter', 'Lord Voldemort', 'Albus Dumbeldore', 'Severus Snape'];

// Call make_great function to modify the array of magicians
let great_magicians: string[] = make_great(magicians);

// Call the function to show the modified list of magicians
show_magicians(great_magicians);
