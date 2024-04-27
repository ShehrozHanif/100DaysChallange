// Day 32
// Question 94:
/*Use the .map() to create new array that contains the length of each word from an array of words.  */
let word = ["Hello", "World", "TypeScript", "JavaScript"];
const lengths = word.map(word => word.length);
console.log(lengths);
//Question 95: Write a function that uses the .filtar() method. Create a new array with all elements that pass the test implemented by the provided 
//  function 
function greaterNumber(num1) {
    return num1.filter(Number => Number > 10);
}
const num2 = [5, 10, 15, 20, 25, 30];
console.log(greaterNumber(num2));
// Question 96:   Demonstrate how to use the .reduce() method to call the sum of all number in an array
function calculateNumber(num3) {
    let lol = num3.reduce((total, sum) => total + sum, 0);
    return lol;
}
const num3 = [5, 10, 25, 15, 5];
console.log(calculateNumber(num3));
export {};
