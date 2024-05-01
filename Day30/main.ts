//  Day 30
// Question No 88:
/*Rounding to the Nearest integer:Write a function that takes a decimal number as input and returns the 
number rounded to the nearest integer.  */

function roundInteger(num1:number):number{
    return Math.round(num1)
}

console.log(roundInteger(4.5))
console.log(roundInteger(5.3))
console.log(roundInteger(6.9))



// Question No 89:
/*Converting String to Numbers. Create a function that takes a string representing a number (like "123") 
and converts it into an actual number type. */

function stringToNumber(str:string):number{
    return parseFloat(str)
}

console.log(stringToNumber("125"))
console.log(stringToNumber("200"))
console.log(stringToNumber("765"))


// Question 90
/*Checking if a value is Nan: Demonstrate how to check if a variable's value is NaN(Not a Number)
 and return a boolean result. */

function valueIsnan(val:any):boolean{
    return isNaN(val)
}
console.log(valueIsnan("Hello"))
console.log(valueIsnan(123))
console.log(valueIsnan("Hello21"))
