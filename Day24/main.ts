// Day 24
// Question 70
/* Understanding let in loops:Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword
affects the visiblity of the loop variable. */

function printNumberWithLet(){
    for(let i = 0; i < 5; i++){
        console.log(i)
    }
}
printNumberWithLet()


// Question 71:
/*Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and 
catch the error: */

let name = "shehroz"
name = "shahmi" // value can be re-assign
console.log(name)

const name2 = "Billa"
name2 = "Billa" // can't redeclare again
console.log(name2) // catch error

// Question 72:
/*Block Scope code with let and const:Demonstrate block scope code by creating a code block with {} that uses both let and const. Show how 
variable declare inside the block are not accessible outside the block. */

// In this answer we are just express that how blockcode work inside or Outside
{
    let blockOfCode = "Shehroz"
    console.log(blockOfCode) // it Works with let

    const blockcode = 125
    console.log(blockcode)  // It work with const 
}


     console.log(blockOfCode) // it show error because it can't work outside the code
     console.log(blockcode)  // same error with Const
