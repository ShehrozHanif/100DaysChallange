"use strict";
// Day 11
// Question No 31
// In this Question we need to Check the Array. Is an empty or not and check through if && else.
// if the Array is empty so ptint this We need to find Some User || ift the user in it than Remove all the username from your Array.
// let username:[] =[];
// if(username.length === 0){
//     console.log("We need to find Some User")
// }else{
//     console.log("Remove all the username from your Array")
// };
// Question No 32
// let currentUser:string[] =["Admin","user1","user2","user3","user4","user5"];
// let newUser:string[] = ["user1","admin","user7","user8","user9","user10"];
// for(let i = 0; i < newUser.length; i++){
//     currentUser.some(currentUser =>{
//         if(currentUser[i].toLowerCase() === newUser[i].toLowerCase()){
//             console.log(newUser[i] + "will need to enter a newUsername")
//         }else{
//             console.log(newUser[i] + "is available")
//         };
//     })
// };
let currentUser = ["Admin", "user1", "user2", "user3", "user4", "user5"];
let newUser = ["user1", "admin", "user7", "user8", "user9", "user10"];
for (let i = 0; i < newUser.length; i++) {
    let isAvailable = currentUser.some(user => user.toLowerCase() === newUser[i].toLowerCase());
    if (isAvailable) {
        console.log(newUser[i] + " will need to enter a newUsername");
    }
    else {
        console.log(newUser[i] + " is available");
    }
}
// newUser.forEach(newUser=>{
//     if(currentUser.some(currentUser=>currentUser.toLowerCase() === newUser.toLowerCase())){
//         console.log(newUser + "will need to enter a newUsername")
//     }else{
//         console.log(newUser + "is available")
//     }
// });
// Question No 33
// let numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
// for(let i =0; i<numbers.length; i++ ){
//     let suffix = "th"
//     if(numbers[i] === 1){
//         suffix = "st";
//     }else if(numbers[i] === 2){
//         suffix = "nd";
//     }else if(numbers[i] === 3){
//         suffix = "rd";
//     }
//     console.log(numbers[i]+suffix)
// };
// In this Scenario i use both case because i want to know how van we do it with both ways because i am developer 
// numbers.forEach(numbers=>{
//     let suffix ="th";
//     if(numbers === 1){
//         suffix = "st";
//     }else if(numbers === 2){
//         suffix = "nd";
//     }else if(numbers === 3){
//         suffix = "rd"
//     };
//     console.log(numbers+suffix)
// })
