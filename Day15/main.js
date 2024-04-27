"use strict";
// Day 15
Object.defineProperty(exports, "__esModule", { value: true });
// Question No 43:
/* Unchanged Magicians: Preserve the original magician names while creating a new "great" list. */
// In this question use old reference function
function showMagician(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
    ;
}
;
// so this function we use becuase we need a reference in our Answer
// Now Starting the answer of 43 start
// What we doing this in this make first Make an Array in which some values.
// than make an another Array which is  Empty and with the help of function we push values of first Array in it and also add some string. 
// we can make a copy of first Array so later we can change it as well
let magicians = ["Bongali Baba", "Mehboob apke Qadmoo me baba", "paisa hi paisa baba"];
function makeGreat(magi) {
    let magi2 = [];
    for (let i = 0; i < magi.length; i++) {
        magi2.push(`${magi[i]} the Great`);
    }
    ;
    return magi2;
}
let greatMagicians = makeGreat(magicians.slice());
// console.log("Orignal Magician\n")
//  showMagician(magicians)
//  console.log("\ngreatMagicians\n")
// showMagician(greatMagicians)
// what we did in this makeGreat function first we use one Parameter
// then Decalre a variable called magi2 and give the value as an Empty Array
// then start an iteration for the function (parameter) value 
// than push an empty  along with that array which we want to add on it
// then make a variable in which we assing that fuction along with Parameter value 
// Than we console it and see a result
// Question 44:
/* Sandwiches: Summarize sandwich orders with varying ingredients */
function makeSandwich(...product) {
    console.log(`making a sandwich with ${product.join(',')}.`);
}
// makeSandwich("potato","cheese","briyani")
// what we did in this function use .join so with only one parameter we use multiple Arguments
// Question 45:
/* Cars: Create detailed car objects with flexible properties. */
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
