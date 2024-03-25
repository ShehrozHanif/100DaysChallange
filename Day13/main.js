// Day 13
// Question No 37
function maketshirt(size = "Large", message = "I love myself") {
    console.log(`Making a ${size} size T-shirt and print on that message "${message}"`);
}
;
maketshirt();
// In this fuction we set a Default Parameter
maketshirt("medium");
// In this function we give one argument and one is default
maketshirt("Small", "Coding is my life");
// In this function we give both the Argument
// Question No 38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("karacih");
// In this function we give 1 argument and default parameter
describe_city("Lahore");
// In this function we give 1 argument and default parameter
describe_city("London", "England");
// In this function we give both argument 
// Question 39
function city_country(city, country) {
    return `${city} , ${country}`;
}
;
console.log(city_country("Paris", "France"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("kabul", "Afghanistan"));
export {};
