// Day 34
// Question 100: Use the javaScript Math  object to find the square root of 144

// const squareRoot:number = Math.sqrt(36)
// console.log(squareRoot)

// If we want to make a function then,

function squareRoot(num1:number):number{
    return Math.sqrt(num1)
}

console.log(squareRoot(25))




// Question 101 : Genrate a random integer between 1 to 10

function randomNumber():number{
    return Math.floor(Math.random() *10) + 1;
}
console.log(randomNumber())





// Question 102: Calculate and log the absolute difference between the number -5 and 5

const diff = Math.abs(-5-5)
console.log(diff)