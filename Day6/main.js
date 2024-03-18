"use strict";
// Day 6
// Question No 16
let oldGuest = ["Imran Khan Sahab", "Tariq Jameel Sahab", "Sir Zia"];
// // As you can see or know we already invite some guest in our previous Program
// //but this time we found a bigger Dinnig table so we invite more guest
console.log("we found a bigger Dinner Table so we need more guest");
// // Adding More Guest(At teh beginning ,Middle, and End)
oldGuest.unshift("Mrs Imran Khan");
// //Unshift is used to add at the Beginning
oldGuest.splice(2, 0, "Muraad Saeed");
// // Splice is used to add where you want in the array and also for replace
oldGuest.push("Yateem Bacho");
// // push Function is use to add the end 
// // Now the Process of iteration
for (let i = 0; i < oldGuest.length; i++) {
    let invitation = "I would like you to invite on dinner";
    console.log(`${invitation} ${oldGuest[i]}`);
}
// //So as you can see we add more guest in the beginning , Middle and End
//       //          //        Question no 17  //        //          //            //          // 
//Question 17
//  console.log(" As you know due to shortage of table I can invite only 2 people")
//  Remaining Guest will be remove
// let GuestList:string[] =["Mrs Imran khan","Imran Khan Sahab","Murad Saaed","Tariq Jameel Sahab","Sir Zia","Yateem Bacho"]
// // let remove:string[] = GuestList.slice(0,2)
// console.log(remove)
// //As you can see with the help of Slice function we remove other Guest and invite only 2
// for(let i =0; i<remove.length; i++){
//     let invitation:string ="would like you to come on dinner"
//     console.log(`${invitation} ${remove[i]}`)
// }
// This is one of the way which i found to solve this Question 
// The Question demand due to shortage of table we need to cancel the invite of more than 2 guest
// let me try Another way beacuse i am not satisfy with this becasue it's not look like programer type
//   // Question No 17 (Again) 
console.log("Unfortunately,new table won't arrive sp I can only invite two people for dinner.");
let GuestList = ["Mrs Imran khan", "Mr Imran Khan Sahab", "Murad Saaed", "Tariq Jameel Sahab", "Sir Zia", "Yateem Bacho"];
if (GuestList.length > 2) {
    let removedGuest = GuestList.splice(2);
    for (let i = 0; i < removedGuest.length; i++) {
        console.log(`Dear ${removedGuest[i]} i can't invite you for dinner`);
    }
}
// So i'll explain you what i did in this program 
// First of all using If estatement that if Guestlist greater than use a splice function 
// So GuestLength = 6 , than its implement and its returning value save in a variable called removedGuest
// In this removedGuest we save retutning value which is starting from Guestlist.length(3) till end.
// Then as usall Iteration and put in iteration 
for (let i = 0; i < GuestList.length; i++) {
    console.log(`Respected ${GuestList[i]} you are invited for dinner`);
}
//// Now in this we use the reaming value which is left in Guestlist after splice it
//// Remaing Value is "Mrs Imran khan ", "Mr Imran Khan Sahab" we use for invite 
GuestList.splice(0);
console.log(GuestList);
// And in the last we show that we have a list of an Array in only 2 pick and rest of all Eliminated so the Array will be Empty 
// As you can see in the terminal when it console.log()
// // So the moral of this question is that because of new table won't arrive so we remove some people from our guess list and in the end show the 
// // list empty.
// Question No 18
let places = ["Norway", "Swizerland", "Canada", "Greenland", "United KIngdom"];
console.log("Original order:", places);
// This is an Origanl Array[]
console.log("Alphabetic order:", [...places].sort());
// This will make the Array[] in Alphabetic Order
console.log("Orignal order:", places);
// Now again this will show you in Orignal Order
console.log("Reversr Alphabetic Order:", [...places].sort().reverse());
// In this Array we make a reverse Alphabetic  order 
console.log("Orignal Order:", places);
// Now again show the orignal Array[]
places.reverse();
console.log("Reversed order:", places);
//Now again reverse the Array [] now the question in mind if we can reverse with this method so why we use the First Method
//i'll explain the first Method dont effect the orignal Array[ ] it remain same after apply this method
// And when we apply This Method it will change the orignal Array[] and then its orignal form change to what function we apply
// Both function work same only the difference is Orignal Array[]
places.reverse();
console.log("Orignal Order:", places);
// For become Orignal order we have to reverse again because i told you orginal form dont exist with this method thats why we are doing this.
places.sort();
console.log("Alphabetic Order:", places);
// Now it will change into Alphabetic Order
places.reverse();
console.log("Reverse Alphbrtic Order:", places);
// Now the reverse the Alphabetic order
// So what we learn in this code Two different way of Sorting both work same only differnt in orignal Array[]
