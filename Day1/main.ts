// Question NO 2

let name1:string = "Shehroz";
console.log(`Hello ${name1} would you like to learn some TypeScript today?`)

// Question No 3
let name2:string = "M.Hanif"
// For UpperCase
let bigLetter = name2.toUpperCase();
console.log(`${bigLetter}`)

// For lowercase()
let smallLetter = name2.toLowerCase();
console.log(`${smallLetter}`)

//For TitleCase
let firstLetter = name2.charAt(0).toUpperCase();
let secondLetter = name2.slice(1).toLowerCase();

console.log(`${firstLetter + secondLetter}`)