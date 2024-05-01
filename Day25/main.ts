// Day 25
// Question 73:
/* Assigning and Updating variable: Create a function where you declare a variable using let and assign 
an initial value. Then,update its valuw within the same function and log both the initial and updated values. */

function updatedValue(){
    let name = "shehroz"  // Declare a variable using let and assign an initial value
    console.log(`initial value: ${name}`) 

    name = "Shahmi"
    console.log(`Updated Value ${name}`) // Updated value
}

updatedValue()

// Question 74:
/* Swappping variables: Demostrate how to swape the values of two variables. Start with variable a = 5 , b = 6,
 than swap their values so that a becomes 6 and b becomes 5. */

function swapVlaues(){
    let a = 5
    let b = 6
    console.log("Bfore Swapping a =" ,a, "Bfore Swapping b =" ,b )

    let temp = a // temp hold the value of a 

     a = b; // now a hold the value of b

     b = temp // now b hold the value of temp 

     // now check it
     console.log("After Swapping a =" ,a, "After Swapping b =" ,b )

}

swapVlaues()


// Question 75:
/* Compound assignment Operators: Use compound assignment Operator to simplify arithmetic Operations. 
Start with x = 4 and perform a series of Operations(Addition,Subtraction,Multiplication,Division) 
on x using compound Operators. */

function usingCompoundAssignmentOperator(){
    let x = 4;
    console.log("initial value x =",x) //initital value of x

    x +=4;
    console.log("After adding the value of x:",x)

    x -=2;
    console.log("After Subtraction the value of x =",x)

    x *=3;
    console.log("After Multiplication x =",x)
    
    x /= 6;
    console.log("After division x=",x)


}


usingCompoundAssignmentOperator()