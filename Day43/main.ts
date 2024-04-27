// Day43
// Question 127: Convert a traditional function expression to an arrow function.

// Traditional function
let traditionalfunction =  function(a:number,b:number){
    return a + b;
};

// Converted to Arrow Function
let arrowFunction = (a:number, b:number)=>{
    return a + b
}

console.log(traditionalfunction(5,3)) // 8
console.log(arrowFunction(5,3)) // 8

// See output are same

// Question 128:Create an arrow function that takes a multiple parameter retuen the product of all parameters.
 
let multiFunction = (...num:number[])=>{
    return num.reduce((total,number) => total * number ,1)
    
}

console.log(multiFunction(5,6,8))


// Question 129:Explain how this behaves differntly in arrow function compared to traditional functions:

const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
      console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
    },
  };
  
  traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
  traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
  // This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions
  