// Question 49
/* Function with rest Parameters. Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby
 with a statement saying you enjoy that hobby */

 function logHobbies(...hobbies:string[]){
    hobbies.forEach(hobbies=>{
        console.log(`I love that ${hobbies}`)
    })
 }

 logHobbies("reading","coonking","sleeping")

//  Question 50
/* Multiple template literals: Use template literals to create a multiline string that describes that describe your ideal day.
include atleat three different activities. */

import chalk from "chalk"

let mulLiteral = `My ideal day would be include:
1)${chalk.red(`Wake up Ealy in the Morning && Perform Namaz`)} 
2)${chalk.yellow(`Go to gym doing excercise including steam, sunna, jacuzzi and swimming`)} 
3)${chalk.green( `BreakFast with my whole family`)}`

console.log(mulLiteral)

// Question 51 
/*Refactoring to arrow function. Take a simple function that calculaate the area of rectangle refactor it into an arrow funtion */


function calculaateArea1(width:number, height:number){
    return width * height
}
let area = calculaateArea1(5,6)
console.log(area)

let calculateArea = (width:number, height:number):number=>
     width * height;

let area2 = calculateArea(5,8)
console.log(area2)


