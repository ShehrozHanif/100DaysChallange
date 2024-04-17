// Day27
// Question 79:
/*Creating an Accessing Object Properties:Construct an Object representing a car with properties for make,model and year.Then,show how you can access the model 
property of the car */

let car:any =
    {
        make:"Corolla",
        modle:"Altis X",
        year:"2022",
    }

console.log(car.modle)

// Question 80:
// Updating Object Properties:Add a property named color to the exisiting car object, and then update the year property to 2024:show how to perform
// these operations.
let car2:any ={
    make:"civiv",
    model:"Turbo",
    year:"2023",

}

// Updating the year and Add a property named color

//  car2.color = "Black";
 console.log(car2)

//  Adding a Propertt
 car2.color ="Black";
 console.log(car2)

// Updating Property 
 car2.year = 2024;
 console.log(car2)

  
// Question 81: Iterating Over Object Properties: Write a function thatb takes an Object as an argument and logs all of its properties and values

// function logObject(obj:object){
//     for(let property in obj)
//         console.log(`${property}:${obj[property]}`)
// }

// logObject({make:"corolla",model:"Altis X",year:"2022"})
 
function logObject(obj:{[key:string]:any}) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

logObject({ make: "corolla", model: "Altis X", year: "2022" });