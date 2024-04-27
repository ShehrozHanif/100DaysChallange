// Day 36
// Question No 106: Determine if a given year is a leap year using comparison Operators
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    //it's a anciemt formula later in 1956 its called leap year formula
}
console.log(isLeapYear(2025));
// Question 107: Write a condition using logical Operator that check if a number is divisible by both 2 and 3
function isDivisibleByTwoAndThree(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(9));
console.log(isDivisibleByTwoAndThree(18));
// Question 108: Compare two Strings to check if they are identical,ignoring case sensitivity 
function compareString(str1, str2) {
    return str1.toLowerCase === str2.toLowerCase;
}
console.log(compareString("hello", "HELLO"));
export {};
