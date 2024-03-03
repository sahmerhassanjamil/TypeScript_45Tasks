
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

// Call make_great function with a copy of the array of magician's names
let great_magicians: string[] = make_great([...magicians]);

// Call show_magicians function with each array to show the original and modified list of magicians
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
