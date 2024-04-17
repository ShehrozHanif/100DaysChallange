// Day 20
// Question 58
/*Aerage Score Calculator: write a program that can take lots of scores and find their average. */
function averageScore3(...scores) {
    let averageScore2 = scores.reduce((total, score) => total + score, 0);
    return averageScore2 / scores.length;
}
let check = console.log(averageScore3(562, 450, 356, 256, 265, 279));
//Question No 59
/* Add a Special Number. Make a program that crates custom adders.These adders can add a specific number to any other number you give them later? */
function addMaker(valuTOAdd) {
    return function (number) {
        return number + valuTOAdd;
    };
}
let addfive = addMaker(20);
console.log(addfive(10));
// Question 60 
/* Self running user Profile create a quick, self-setup profile for a user that can tell you the user's name and age? */
import chalk from "chalk";
let userProfile = (function () {
    let name = "Shehroz";
    let age = 26;
    return {
        displayInfo: function () {
            console.log(chalk.green(`Name: ${chalk.yellow(name)}, Age: ${chalk.red(age)}`));
        }
    };
})();
userProfile.displayInfo();
