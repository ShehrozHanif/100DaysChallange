// Day35
// Question 103: Write a function that return a remdom Boolean Value, tru or false.

function randomBoolean():boolean{
return Math.random() > 0.5
}

console.log(randomBoolean())


// Question 104: Create a function that generate a random hexadecimal color code

function randomColor():string{
    const color = "#"+Math.floor(Math.random()*0xffffff).toString(16).padStart(6,"0")
    return color;
}
console.log(randomColor())




// Question 105: Simulate a dice roll using JavaScript and return a random value integer between 1 to 6 

function rollDice():number{
    return Math.floor(Math.random()*6)+1
}

console.log(rollDice())


// let color = '#' + Math.floor(Math.random()*0xffffff).toString(16).padStart(6,"0")

// console.log(color)