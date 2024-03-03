// Store the person's name in a variable
let personName: string = "Syed Ahmer Jamil";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the person's name in titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
