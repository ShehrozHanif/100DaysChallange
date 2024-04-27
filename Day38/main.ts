// Day 38
// Question 112: Create a Map that stores the name of the countries as keys and their Capitals as values. Add three Counties to the map.

let countries = new Map<string,string>()
countries.set("Italy","Rome");
countries.set("Turkey","Istanbul");
countries.set("Pakistan","Islamabad");

console.log(countries)




// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exist.

function chaeckCanada(countries:Map<string,string>){
    if(countries.has("Canada")){
        console.log(`The Capital of Canada is ${countries.get("Canada")} `)
    }else{
        console.log(`Canada is not in the Map`)
    }
}

chaeckCanada(countries)


//Question 114: Iterate over a Map of Student IDs and names, and log each pair to the console.

const studentId = new Map<number,string>()
studentId.set(1, "Shehroz Hanif")
studentId.set(2, "Ayan")
studentId.set(3,"Husnain")

 studentId.forEach((name,id) => {
    console.log(`Student ID: ${id}, Name: ${name}`)
});

// const studentId = new Map<number, string>();
// studentId.set(1, "Shehroz Hanif");
// studentId.set(2, "Ayan");
// studentId.set(3, "Husnain");

// studentId.forEach((name, id) => {
//     console.log(`Student ID: ${id}, Name: ${name}`);
// });