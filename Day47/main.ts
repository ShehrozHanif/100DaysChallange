// Day 47
//Question 139: List three reserved words in JavaScript and create a valid use case for each

let a = "Shehroz"
// Let is a reserved keyword it is used to Store a variable

if(a == "Shehroz"){
  // console.log("True")
}
//if - is used to execute a block-of code if a specified condition is true


function mul(a:number, b:number){
    return a*b
} 
// return - is used to exit a function and return a value from a function

// Demonstrate valid case of reserved keyword 'let' , 'if', 'return'



//Question 140: Explain the error that Occurs when trying to use a reserved words as a variable name.
 
// let if =5;
console.log("Error occur because we used reserved keyword as a variable name ")



//Question 141:Discuss the significance of the await reserved word in asynchronous JavaScript.



// Example use of the 'await' reserved word in asynchronous JavaScript
async function fetchData() {
  // Assuming fetchSomething returns a Promise
  const data = await fetchSomething();
  console.log(data);
  // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}

console.log(
  "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
);
// This demonstrates how 'await' improves readability and flow in asynchronous code.

/*Summary: Basically what is heppen in this question it demonstrate how await simplifies the handling of asynchronous Operations, making the code
redeable and easier to understand compare to using.then() callback */
