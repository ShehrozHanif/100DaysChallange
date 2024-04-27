// Day 7
// Questiion No 19:
 /*Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are 
inviting to dinner. */ 

let guestList:string[]=["Mrs Imran khan","Imran Khan Sahab","Murad Saaed","Tariq Jameel Sahab","Sir Zia","Yateem Bacho"]
// Guest List
let number = guestList.length
// Now we find how many guest arrive and save the value in variable called number
console.log(`we are inviting ${number} people for dinner`)
// Now we print how many people we Invite for Dinner






// Question No 20:
/*  Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, 
or anything else you’d like. Write a program that creates a list containing these items. */

let impLang:string[] =["German","French","Italian","Arabic","English","Chinese"]
// we store some values in an Array
for(let i = 0; i<impLang.length; i++){
    console.log(impLang[i])
} 
// Now print this with the help of console







// Question No 21:
/*Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */


let user = {
    fName:"Shehroz",
    lName:"M.Hanif",
    age:  26
}
// As you can see we make an onject called User
console.log(`My name is ${user.fName} and my Sir name ${user.lName} is and my age is ${user.age}`)
//  As ususal we print this through Console