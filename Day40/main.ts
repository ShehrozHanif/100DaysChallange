// Day40
// Question 118: Write a loop that logs numbers from 1 to 10 to the console 

for(let i =0; i <=10; i++){
    console.log(i)
}

// Question 119: Create a while loop that logs "Hello World" 5 times 

let count = 0;
while(count<5){
    console.log("Hello World")
    count++
}

// Question 120:Use a for ... of loop to itereat throgh an array of your favourite movies
// and logeach one 
const favouriteMovie:string[] = [
    "Infinity War",
    "Age Of Ultron",
    "Fast 10",
    "Fast x"
]

for(let movies of favouriteMovie){
    console.log(movies)
}