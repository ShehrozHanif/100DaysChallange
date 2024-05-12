// Day49
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
function invokeCallBack(callback, arg1, arg2) {
    callback(arg1, arg2);
}
let mul = (a, b) => {
    console.log(a * b);
};
invokeCallBack(mul, 5, 4);
// Another way to do this almost similar
function invCallback(callback) {
    const arg1 = "Hello";
    const arg2 = 123;
    callback(arg1, arg2);
}
function callback(arg1, arg2) {
    console.log(`${arg1} ${arg2} is written in thic code `);
}
invCallback(callback);
// Both the methods are same
// Question 146: Show an example of a callback function used to filter an array of numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Make a Array of number 
const filerNumber = numbers.filter((number => number > 5));
// Uses .filter() with a callback function to filter out numbers greater than 5
console.log(filerNumber);
// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria.
// Another way to do this
//Define FilterNumber function
function filerNumbers(number, callbacks) {
    return numbers.filter(callbacks);
}
//Define Callback function
const isEven = (num) => {
    return num % 2 === 0;
};
// Define number 
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filNum = filerNumbers(number, isEven);
console.log("Even Numbers:", filNum);
//Question 147: Explain how to handle errors in a callback pattern.
// function fetchData(callback:(error:Error|null, data:any)=>void):void{
//     const data = "some data";
//     const error = new Error("failed to fatch data")
//      // Simulate fetching data with a chance of error
//   if (Math.random() > 0.5) {
//     callback(null, data); // No error, data is fetched successfully
//   } else {
//     callback(error); // Passes error to the callback
//   }
// }
// // Using the fetchData function with error handling in the callback
// fetchData((error, data) => {
//     if (error) {
//       console.error(error.message); // Handles the error
//     } else {
//       console.log(data); // Processes the data
//     }
//   });
//   // Demonstrates a callback pattern where errors are handled gracefully.
//Another way to do 
function asynchronousOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.5;
            if (success) {
                resolve('Success');
            }
            else {
                reject(new Error('Something went wrong'));
            }
        }, 2000);
    });
}
asynchronousOperation()
    .then(result => {
    console.log('Operation successfull', result);
})
    .catch(error => {
    console.error('An error occurred');
});
export {};
