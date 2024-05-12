//Another way to do Question 149
//Concept of event loop
// function fetchDataFromServer(callbacks:(data:string)=>void):void{
//     setTimeout(() => {
//         const data = "Fetch data from Server";
//         callbacks(data)
//     }, 2000);
// }
// function handleData(data:string){
//     console.log("Data recieved",data)
// }
// console.log("Fetching Data from Server...")
// fetchDataFromServer(handleData);
// console.log("Program continues...");
// console.log("Fetching Data from Server")
// setTimeout(() => {
//     console.log("Data recieved Fetch data from Server")
// }, 2000);
// console.log("Program Continues")
//Another way to do Questoion 150
function synchronousOperation() {
    console.log("Start");
    console.log("Middile");
    console.log("End");
}
console.log("Before Asynchronous Operation");
synchronousOperation();
console.log("After synchronous Operation");
function asynchronousOperation() {
    console.log("Start");
    setTimeout(() => {
        console.log("Async Callback executed");
    }, 2000);
    console.log("End");
}
console.log("Bedore Asynchronous Opertaion");
asynchronousOperation();
console.log("After Asynchronous Opertaion");
export {};
