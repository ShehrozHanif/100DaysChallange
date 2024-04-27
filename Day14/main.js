"use strict";
// Day 14
Object.defineProperty(exports, "__esModule", { value: true });
// Question 40:
/* Album: Create objects for music albums. */
function make_album(artist, title, track) {
    let album = { artist, title, };
    return album;
}
console.log(make_album("Josh", "josh-e-junoon"));
console.log(make_album("SHEHROZ", "Muhafiz", 6));
console.log(make_album("shahni", "QAIDI NO 804", 1));
// Question 41:
/* Magicians: Display magician names from an array.*/
let magician = ["Nosh", "Enum", "Sid"];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
    ;
}
;
show_magicians(magician);
// Question 42:
/* Great Magicians: Add "the Great" to magician names. */
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(`The great ${magician[i]}`);
    }
    ;
}
;
show_magicians(magician);
make_great(magician);
