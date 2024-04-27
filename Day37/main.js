// Day 37
// Question 109: Write an if statement that logs"Good Morning" If the current time is before 12 PM.
let currentTime = new Date();
if (currentTime.getTime() < 12) {
    console.log("Good Morning"); // it is only work if your current time less than 12
}
// Question 110: Create a function that assigns a grade (A,B,C,D,E,F) based on a student score
let score = 49;
if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 80) {
    console.log("Grade B");
}
else if (score >= 70) {
    console.log("Grade C");
}
else if (score >= 60) {
    console.log("Grade D");
}
else if (score >= 50) {
    console.log("Greade E");
}
else {
    console.log("Failed");
}
// Question 111: Use an if-else chain to categorize a person's age group(child, teemager,adult)
function categorizeAge(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age <= 19) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(categorizeAge(15));
console.log(categorizeAge(19));
console.log(categorizeAge(12));
console.log(categorizeAge(20));
export {};
