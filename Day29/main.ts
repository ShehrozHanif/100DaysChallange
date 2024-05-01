
// Day 29

// Question 85:
/* Finding the position of a Substring:Write a function that locates the first occurance of the word "code" 
within any guven string and returns its position */
function firstOccur(str:string){
    return str.indexOf("code")
}

console.log(firstOccur("learn code with typeScript"))


// Question 86:
/*Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given 
string. It should return true if found, otherwise false.  */

function stePresence(str1:string){
    return str1.includes("JavaScript")
}

console.log(stePresence("hello i am JavaScript"))

// Question 87: 
/*Extreacting a Substring:Demonstrate how to extract th first 10 character of a string. */

function extractFunc(str2:string){
    return str2.substring(0,10)    
}
let d = extractFunc("Hello Welcome to TypeScript World")
console.log(d)


