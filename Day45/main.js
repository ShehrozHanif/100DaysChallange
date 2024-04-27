// Day 45
// Question 133: Write a JavaScript object and convert it to Json String.
let person = {
    name: "Shehroz Hanif",
    age: 26,
    city: "Karachi",
};
let applyJason = JSON.stringify(person);
console.log(applyJason);
let makeObj = JSON.parse(applyJason);
console.log(makeObj);
export {};
