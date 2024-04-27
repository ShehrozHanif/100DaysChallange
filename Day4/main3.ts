// Day 4
//  Question 10:
/* Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at 
this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does */

// Shehroz, 2024-03-05
// This program prints a personal message.

let myName: string = "Shehroz";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);






// Question 11:
/* Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, 
one at a time.
 */

 let friendList:string[] = ["nabil","akbar","huzaifa","yazdani"]
 
// // Store a friend names in an Array[]

for (let i =0;  i < friendList.length ; i++){
    console.log(friendList[i]);
}
// // we use iteration so array name display line by line






// Question No 12:
/*  Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message
 should be the same for each person, but personalized with their name. */

// what we do in the code to add add a variable in iteration let me show you

let name1:string[] = ["nabil","akbar","huzaifa","yazdani"]
for (let i =0;  i < name1.length ; i++){
    let greeting = "Would you like to learn Some TypeScript Today? "
    
//     // see this is th variable greeting we add in this 
    
    console.log(`Hi ${name1[i]}  ${greeting}`);
}
// So what we did in this program we add we are not just calling friend name line by line but we also give greetings to them


