// Day26
// Question 76:
/* Function Parameters nad Return Values: Create a function that takes two numbers as a parameters, adds them together, and returns the result.
Show how you can all this function and log the result */
function addNumber(num1, num2) {
    return num1 + num2;
}
console.log(addNumber(5, 6));
// Question 77:
/*Default Parameters:Write a function that greets a user.It should take the user's name as a parameter and say hello.If no name is given, it should
greet an anonymous user. */
function greetUser(username = "Shehroz ") {
    let greetinng = "How are you";
    return username + "" + greetinng;
}
console.log(greetUser());
// Question 78:
/*Funtion Expresssion vs Function Decleration: Compare function expression and declerations by creating one of each that perfrom the task,
such as squaring a number */
function decleration(number) {
    return number * number;
} // This is function declaration
console.log(decleration(6)); // Answer is 36
// Now Function Expression
const functionExpression = (number) => {
    return number * number;
};
console.log(functionExpression(6));
export {};
