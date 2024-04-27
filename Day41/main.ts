// Day 41
// Question 121: Implement a for loop that counts from 1 to 10 but skip number 5 using the continue Statement.

for(let i = 0; i <=10; i++){
    if(i === 5){
        continue; // it means to skip 5
    }
    console.log(i)
}


// Question 122: Use a while loop to count down from 10 to 1and break the loop when it reaches 5

let countdown = 10;
while(countdown > 0){
    if(countdown === 5){
        break;
    }
    console.log(countdown)
    countdown--
}


// Question 123: Create a loop that iterates through a string and stop when it finds the first vovel


function firstVowel(str:string){
    const vovel = ["a","e","i","o","u"]
    for(const char of str.toLowerCase()){
        if(vovel.includes(char)){
            return char
        }
    }
    return null
}


let input =firstVowel("lpn")
if(input){
    console.log("first vovel ", input)
}else{
    console.log(`No vovel found`)
}