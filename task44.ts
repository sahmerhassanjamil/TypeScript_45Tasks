// Define a function called car_info
function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, options: { [key: string]: any } } {
    let car: { manufacturer: string, model: string, options: { [key: string]: any } } = {
        manufacturer: manufacturer,
        model: model,
        options: {}
    };

    // Assign additional options to the car object
    for (let option of options) {
        let key = Object.keys(option)[0];
        car.options[key] = option[key];
    }

    return car;
}

// Call the function with required information and two other name-value pairs
let my_car = car_info('Toyota', 'Corolla Altis 1.6 X', { color: 'white' }, { year: 2022 });

// Print the Object that’s returned
console.log(my_car);
