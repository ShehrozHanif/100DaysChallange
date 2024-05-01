// Day 21
// Question 61:
/* Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, motercycles using enums, and show one example. */

enum vehicles{
    cars,
    trucks,
    motercycles,
}

console.log(vehicles.cars)
console.log(vehicles.trucks)
console.log(vehicles.motercycles)


// Question 62: Making a Student Template: Create a bluePrint for student information, including their name,age,classes they're taking and then 
// fill in this blueprint with an student example.

interface student {
    name: string;
    age: number;
    classes: string[];
}

let stud:student= {
    name:"Shehroz",
    age:25,
    classes: ["Math","Physics","Computer Science"]

}

console.log(stud)


// Question 63:
/* Shape Shifter: write a program that can describe either a circle or rectangle using a special type alias,
 including properties unique to each shape. */

type shape = {
    kind: "circle" | "rectangle" ;
    radius?: number;
    width?: number;
    height?:number;
    
}

let circle:shape = {
    kind: "circle",
    radius: 5,

}

let rectangle: shape = {
    kind: "rectangle",
    width:5,
    height:6,
}


console.log(circle)
console.log(rectangle)
