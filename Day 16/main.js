// Question 46
/* Enhaced Laptop Object: Construcy an Object for a Laptop including properties make, model, year and a method describe() that logs a
sentence about the laptop?  */
import chalk from "chalk";
let laptop = {
    make: "Apple",
    modle: "M1",
    year: "2022",
    describe: function () {
        console.log(`The laptop model is ${chalk.yellow(laptop.modle)}  and the make is ${chalk.green(laptop.make)} and the year is 
        ${chalk.red(laptop.year)}`);
    }
};
laptop.describe();
// Question 47
/* Advanced Array Destructiong Given an array of objects representing different laptops, each with properties make, model, year, use
array destruction to assign the first and second laptops to variables Then, log these variables. */
let loptop = ([
    {
        make: "hp",
        model: "pro",
        year: "2022",
    },
    {
        make: "Del",
        model: "elite",
        year: "2023",
    },
    {
        make: "Apple",
        model: "macbook",
        year: "2024",
    }
]);
let [loptop1, loptop2, loptop3, loptop4] = loptop;
console.log(loptop1);
console.log(loptop2);
console.log(loptop3);
console.log(loptop4);
// Question 48
/* Combining Arrays with spread operators: Suppose you are compairing prices of two different sets of laptops.Use the spread Operators to combine
these arrays into a single array sorted in ascending order, then log the result?  */
let priceSet1 = [1200, 1500, 1100];
let priceSet2 = [1000, 1300, 1600];
let combinePrice = [...priceSet1, ...priceSet2].sort((a, b) => a + b);
console.log(combinePrice);
