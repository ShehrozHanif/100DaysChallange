// Day 48
// Question 142:Create a Promise that resolves with "Hello, World!" after 2 seconds.
// let promise = new Promise((resolve, rejected)=>{
//     console.log("Promise Pending")
//     setTimeout(()=>{
//         console.log("Pending resolve after 2 Second")
//         resolve("Hello world")        
//     },2000);
// })
// promise.then((res)=>(console.log(res)))
// let promise2 = new Promise((resolve,rejected)=>{
//     console.log("Promise pending")
//     setTimeout(()=>{
//         let data = ""
//         if(data){
//             console.log("Promise resolved after 2 second")
//             return resolve(data)
//         }else{
//             console.log("Promise Failed")
//             return rejected (new Error("Data Issue"))
//         }
//     },2000);
// })
// promise2.then((res)=>(console.log(res))) 
// promise2.catch((err)=>(console.log("Can't fetch data")))
// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// let promise3 = new Promise((resolve,rejected)=>{
//     console.log("Promise pending")
//     setTimeout(()=>{
//         console.log("Promise Resolve")
//         resolve("Tere rukh se apna rasta")
//     },2000)
// })
// //This is how we use .then for promise reolution  or we can say this if the promise is resolve than throught .then method we can print in console  
// promise3.then((res)=>(console.log(res)))
// let promise4 = new Promise((resolve,rejected)=>{
//     console.log("Promise pending")
//     setTimeout(()=>{
//         console.log("Promise Rejected")
//          rejected(new Error("Data fetch failed"))
//     },2000)
// })
// // This is how we use .catch Method to get error in console 
// promise4.catch((err)=>(console.log("Mjh ko rana ji maaf karna")))
// Creates a Promise that either resolves or rejects based on a condition
// const conditionalPromise = new Promise<string>((resolve, reject) => {
//     console.log("condition pending")
//     setTimeout(()=>{
//         const success = Math.random() > 0.5; // Randomly choose success or failure
//         if (success) {
//             console.log("Consition Resolve")
//           resolve("Success!");
//         } else {
//             console.log("Consition Rejected")
//           reject(new Error("Failure"));
//         }
//     },2000)
//   });
//   conditionalPromise
//     .then((result) => console.log(result)) // Handles a successful resolution
//     .catch((error) => console.log(error.message)); // Handles a rejection
// //   // This code will randomly log either "Success!" or "Failure" based on the outcome of the promise.
// Question 144: Explain the use of the Promise.all() method with an example.
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 2000, "IMI");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // Outputs: [3, 42, "IMI"]
});
export {};
