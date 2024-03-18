"use strict";
// Day 4
//  Question 10
Object.defineProperty(exports, "__esModule", { value: true });
// In this program we write a Quotation"  " along with author name
let author = "Imran Khan";
let quotation = "You only loose when you give up";
console.log(`"${author} once said,"${quotation}""`);
// and we need to make sure the comma(,) and inverted commas ("") put in right place 
// Question 11
let friendList = ["nabil", "akbar", "huzaifa", "yazdani"];
// // Store a friend names in an Array[]
for (let i = 0; i < friendList.length; i++) {
    console.log(friendList[i]);
}
// // we use iteration so array name display line by line
// Question No 12
// what we do in the code to add add a variable in iteration let me show you
let name1 = ["nabil", "akbar", "huzaifa", "yazdani"];
for (let i = 0; i < name1.length; i++) {
    let greeting = "Would you like to learn Some TypeScript Today? ";
    //     // see this is th variable greeting we add in this 
    console.log(`Hi ${name1[i]}  ${greeting}`);
}
// So what we did in this program we add we are not just calling friend name line by line but we also give greetings to them
