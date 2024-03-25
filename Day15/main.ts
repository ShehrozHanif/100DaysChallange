// Day 15

// Question No 43

// In thi question use old reference function

function showMagician(magician:string[]){
    for(let i =0; i<magician.length; i++){
        console.log(magician[i])
    };    
};

// so this function we use becuase we need a reference in our Answer

// Now Starting the answer of 43 start

// What we doing this in this make first Make an Array in which some values.
// than make an another Array which is  Empty and with the help of function we push values of first Array in it and also add some string. 
// we can make a copy of first Array so later we can change it as well

let magicians:string[]=["Bongali Baba","Mehboob apke Qadmoo me baba","paisa hi paisa baba"]
function makeGreat(magi:string[]){
    let magi2:string[] = [];
    for(let i =0; i <magi.length; i++){
        magi2.push(`${magi[i]} the Great`)
    };
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


// Question 44
function makeSandwich(...product:string[]){
    console.log(`making a sandwich with ${product.join(',')}.`)
}
// makeSandwich("potato","cheese","briyani")

// what we did in this function use .join so with only one parameter we use multiple Arguments


// Question 45
