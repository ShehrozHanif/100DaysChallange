// Day 23
// Question 67:
/*Arithmetic with Mixed Types:Write a function that takes two parameters: a number and a stringthat 
represent a number (eg. "5").Return their sum a number. */

function mixedTypes(number1:number,text:string):number{
    return number1 + Number(text)
}

console.log(mixedTypes(15,"50"))


let a = 5
let b = "6"
let c = a + + b
console.log(c)  //11

// Question 68:
/*Multiplying Decimals:Create a function that accepts two decimal numbers and retuen their 
product.Round the result to two decimal places. */

function decimalFunc(num1 : number, num2:number):number{
    return Math.round((num1 * num2)*100)/100
}

console.log(decimalFunc(12.4,0.2))

// Question 69:
/*Dividing and Finding the Reaminder: Write a function that divides two numbers and returns both the quotitent 
and the remainder.Use an Object to return  both values. */

function divideAndRemainder(dividend:number,divisor:number):{quotient:number, remainder:number}{
    let quotient = Math.floor(dividend/divisor);
    let remainder = dividend % divisor
    return {quotient, remainder}
}

console.log(divideAndRemainder(19,3))