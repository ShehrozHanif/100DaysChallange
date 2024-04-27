// Day 5
//  Question No 13:
/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
let transports = ["Honda Civic", "Tesla Car", "Ferrari Car", "Rolls Royce"];
for (let i = 0; i < transports.length; i++) {
    let pre = "I would like to own a";
    console.log(`${pre} ${transports[i]}`);
}
// What we did in this program just used iteration to print in a Sequence
// Question No 14:
/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people
 you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. */
let guestList = ["Imran Khan Sahab", "Tariq Jameel Sahab", "Sir Zia", "Nabeel"];
for (let i = 0; i < guestList.length; i++) {
    let invitation = "I would like you to invite on Dinner";
    console.log(guestList[i] + " " + invitation);
}
// What we did in this code/Program just follow the basic of iteration
/*Question 15:* Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with
a replacement guest */
let unableToAttend = "Nabeel";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Shami";
guestList[guestList.indexOf(unableToAttend)] = newGuest;
// New invitations
guestList.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
export {};
