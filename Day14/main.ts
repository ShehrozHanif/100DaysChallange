// Day 14

// Question 40
function make_album(artist:string, title:string, track?:number){
    let album = {artist,title,};
    return album
}
 
// console.log(make_album("Josh","josh-e-junoon",));
// console.log(make_album("SHEHROZ","Muhafiz",6));
// console.log(make_album("shahni","QAIDI NO 804",1));



// Question 41
let magician:string[] = ["Nosh","Enum","Sid"];

function show_magicians(magician:string[]){
    for(let i =0; i < magician.length; i++){
        console.log(magician[i])
    };
};

// show_magicians(magician);

// Question 42

function make_great(magician:string[]){
    for(let i =0; i<magician.length; i++){
        console.log(`The great ${magician[i]}`)
    };
};

// show_magicians(magician);

// make_great(magician)


 

 
