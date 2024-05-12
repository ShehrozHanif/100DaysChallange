// Day 50
//Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
// Use setTimeout to log a message after 2 second delay 
setTimeout(() => {
    console.log("This message is show after 2 seconds of delay");
}, 2000);
//This is how we use setTimeout to delay action in your code
//Question 149: Explain the concept of the event loop in JavaScript with an example.
console.log("Start");
setTimeout(() => {
    console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);
console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
//Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
// Synchronous example
console.log("Before synchronous operation");
// Simulate a synchronous blocking operation
for (let i = 0; i < 1e9; i++) { } // A long loop
console.log("After synchronous operation");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");
export {};
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
/*Basically what we did in this Question is difference between asynchronous callback function and synchronous code execution. Basically the
summary is this while running the synchronous code its dont go to the next queue  until the current line is executed while In asynchronous callback
doing multilple whithout waiting for asynchronous opertation to completed */
