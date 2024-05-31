// Day 45
// Question 133: Write a JavaScript object and convert it to Json String.

let person = {
    name:"Shehroz Hanif",
    age: 26 ,
    city: "Karachi" ,
}
// Here we converted JavaSript to Json Object

let applyJason = JSON.stringify(person)
console.log("Converted to Json Object:" ,applyJason)



// Question 134: Take a json String and parse it into a JavaScript Object.

// What we did in this we convert Json Object to JavaScript with the help of .parse Method.

//Json Object
const jsonObj = `{"name":"Shehroz", "age":25, "city":"karachi"}`

//Now converted to JavaScript

let makeObj = JSON.parse(jsonObj)
console.log("Converted to JavaScript Object:",makeObj)



// Question 135: Explain how you can format a Json string with proper indentation for readablity.

const person2 = {name:"kamil", age:30, city:"Bahwalnagar"}

// convert the object into a Json string with indentation
 let convert = JSON.stringify(person2 , null, 2)
 console.log(convert)
 