// Define a function called make_sandwich
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);        
    }
    console.log("Enjoy your sandwich!");
}

// Call the function three times with different numbers of arguments
make_sandwich('Chicken', 'cheese', 'lettuce');
make_sandwich('Beef', 'club');
make_sandwich('Plain', 'Mayo');
