// Day 44
// Question 130: How to export a function from one javaScript file and import it into another file.
// First we need to make a seprate file with .ts

// import {mathfunc} from "./mathFunc.js"

// console.log(mathfunc(2,5))


// Question 131: Create two modules, one that export a class, and another that import the class and creates an instance.

import { student } from "./class.js"
let student1 = new student("Shehroz",25,"Karachi",256)
console.log(student1)

student1.stdfunc()



// Question 132:Discuss the difference between default and named exports in JavaScript modules.

// import myaddFunction from "./defaul.js"
// console.log((myaddFunction(2,5)))

// Here is the clear example of default named function we import the function with not accurate name but still work

//Now see named export function
// import mymulfun from "./defaul.js"
//  console.log(mymulfun(5,6))

 // see after apply default method it's not work because it's name export
 // Hence it is the clear difference between name and default export
 // now apply the name export

//  import { mul,power } from "./name.js"
//  console.log(mul(5,6))
//  console.log(power(5))