"use strict";
// Day 19
// Question 55
/* Double number in an Array: Make a list of numbers.Then use, a trick to make a new list where each number is twice its orignal value? */
Object.defineProperty(exports, "__esModule", { value: true });
let number = [1, 2, 3, 4, 5, 6];
let doubleNumber = number.map(number => number * 2);
console.log(doubleNumber);
// Day 20
// Question 56
/* keep only strings: Given a mix of different types of items. make a new list that has only the words? */
let mixBag = [1, "apple", 25, "bnanan", 125, "shangen"];
let filtar = mixBag.filter(item => typeof item === "string");
console.log(filtar);
// Day 21
// Question 57
/*Find the Average Grade: Given a list of grades, calculate the average grade */
let grade = [90, 85, 75, 99, 82, 78];
let averageGrade = grade.reduce((total, sum) => total + sum, 0) / grade.length;
console.log(averageGrade);
