// Day 45
// Question 133: Write a JavaScript object and convert it to Json String.

let person = {
    name:"Shehroz Hanif",
    age: 26 ,
    city: "Karachi" ,
}

let applyJason = JSON.stringify(person)
console.log(applyJason)



// Question 134: Take a json String and parse it into a JavaScript Object.

// What we did in this we convert Json.string to Object with the help of .parse Method so we use Q:133 json Stringfy

let makeObj = JSON.parse(applyJason)
console.log(makeObj)



// Question 135: Explain how you can format a Json string with proper indentation for readablity.
