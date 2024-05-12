// Day 46
// Question 136: Use console.log() to debug and track the value of a variable insisde a loop.

for(let i =0; i<=6; i++){
    console.log(`Iteration ${i}, i value: , i`)
}


// Question 137:Implement a try-catch block to handle potential errors in a block of code.

console.log("Start")

try {
    // let a
    console.log(a)
} catch (error) {
    console.log("Error")
}

console.log("End")

/*It run like this first tsc  mean complile than run in node.js because when typeScript dont run run the error */

// Question 138:Describe how to use breakpoints in browser developer tools to debug JavaScript code.

console.log("Before BreakPoint");

console.log("This line has a breakPoint set on it in the browser's developer tools")


console.log("After breakPoint")

/* With the help of debug you can pause the specific  queue and and make the code run */