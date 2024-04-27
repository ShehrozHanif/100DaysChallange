"use strict";
// Day 12
// Question No 34:
/* Pizzas: Share your favorite pizzas and express your love for them. */
let pizza = ["papperoni pizza", "Malai pizza", "chicken Fagita pizza"];
for (let i = 0; i < pizza.length; i++) {
    console.log(`i like ${pizza[i]}`);
}
;
console.log("I really love pizza!");
// I use both method for my coding because i am a developer
// pizza.forEach(pizza=>{
//     console.log(`i like ${pizza}`)
// });
// console.log(`i really like pizza`)
// Question No 35:
/* Animals: Highlight animals with a common trait. */
let pet = ["Cat", "Lion", "Dog"];
for (let i = 0; i < pet.length; i++) {
    console.log(`A ${pet[i]} would make a great pet`);
}
;
console.log(`Any of these animal would make a great pet!`);
// I use both method for Enhacement of my coding because i am a developer
// pet.forEach(pet=>{
//     console.log(`A ${pet} would make a great pet`)
// });
// console.log(`Any of these animal would make a great pet!`)
// Question No 36:
/*  T-Shirt: Create a function for customizing t-shirts. */
function makeShirt(size, message) {
    console.log(`Make a ${size} t-shirt with the message "${message}" print on it`);
}
;
makeShirt("Large", "Qaidi No 804");
