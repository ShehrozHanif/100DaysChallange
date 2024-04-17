// Day 20
// Question 61:
/* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, motercycles using enums, and show one example. */
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motercycles"] = 2] = "motercycles";
})(vehicles || (vehicles = {}));
console.log(vehicles.cars);
console.log(vehicles.trucks);
console.log(vehicles.motercycles);
let stud = {
    name: "Shehroz",
    age: 25,
    classes: ["Math", "Physics", "Computer Science"]
};
console.log(stud);
let circle = {
    kind: "circle",
    radius: 5,
};
let rectangle = {
    kind: "rectangle",
    width: 5,
    height: 6,
};
console.log(circle);
console.log(rectangle);
export {};
