// Define a function called city_country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with three city-country pairs
let city1: string = city_country('Lahore', 'Pakistan');
let city2: string = city_country('Tokyo', 'Japan');
let city3: string = city_country('Paris', 'France');

// Print the values returned by the function
console.log(city1);
console.log(city2);
console.log(city3);
