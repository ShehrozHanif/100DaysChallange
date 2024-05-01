// Day 22
/*Question 64: Combine Strings and numbers:Write a function that merges a piece of text with a number for example,
if provided with "Age" and 30, it shold give back age:30. */
import chalk from "chalk";
function mergeNumberAndString(text, number) {
    return chalk.red(text) + chalk.yellow(number);
}
console.log(mergeNumberAndString("Age:", 26));
// Question 65:
/*Determine the remainder:Make a function that gets two numbers and shows the leftover from dividing them using
the % sign. for example, remainder(5,2) should give 1 */
function remainder(number1, number2) {
    return number1 % number2;
}
console.log(remainder(5, 2));
//Question 66:
/*Logocal and Verification: Create a function that checks two boolean (true or false) values.It should only say true,
if both are true,using the && Operator.For instance,CheckBothTrue(true,false)should be false */
function logical(val1, val2) {
    return val1 && val2;
}
console.log(logical(true, false));
console.log(logical(true, true));
