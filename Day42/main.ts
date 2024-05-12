// Day 42 
// Question 124: Create a function inside an object that return the object own name property use the this keyword

const car = {
    name:"Civic",
    getName: function(){
        return this.name
    }
}

console.log(car.getName())


// Question 125: Modify a method in an object to use this keyword to access anoter property in the same object:

const rectangle = {
    length: 5,
    width: 4,
    area: function(){
        return this.length * this.width
    }

}

console.log(rectangle.area())



// Question 126: Explain how the this keyword changes its value when used inside a nested function with in a method.
 

var myObject = {
    property: "Value",
    outerMethod: function () {
        var _thiss = this;
        console.log(this.property); // Works as expected, logs "Value"
        var innerMethod = function () {
            console.log(_thiss.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
        };
        innerMethod();
    },
};
myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.


// This is my practice again to understand that is it work in different way

let myObject2 = {
    peoperty : "value2",
    outerMethod:function(){
        let the = this
        console.log(this.peoperty)
        let innerMthod = function(){
            console.log(the.peoperty)
        };
        innerMthod()
    }
}
myObject2.outerMethod()