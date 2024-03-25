"use strict";
// Day 14
Object.defineProperty(exports, "__esModule", { value: true });
// Question 40
function make_album(artist, title, track) {
    let album = { artist, title, track };
    // if(track){
    //     album['track']=track
    // };
    return album;
}
console.log(make_album("Josh", "josh-e-junoon"));
console.log(make_album("SHEHROZ", "Muhafiz", 6));
console.log(make_album("shahni", "QAIDI NO 804", 1));
// function make_album(artist: string, title: string, tracks?:number) {
//     let album = { artist, title };
//     if (tracks) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));
// Question 41
let magician = ["Nosh", "Enum", "Sid"];
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
    ;
}
;
// show_magicians(magician);
// Question 42
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(`The great ${magician[i]}`);
    }
    ;
}
;
// show_magicians(magician);
// make_great(magician)
