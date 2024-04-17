// Day 28
// Question 82:
/*Find the length of a string:Write a function that takes a String as an argument and retuerns the number of Characters in the string. */

function stringLength(text:string){
    return text.length
}

console.log(stringLength("Shehroz"))



// Question 83:
/*Converting to Upper and LowerCase: Create a function that takes a string, converts it to upperCase, than to lowerCase and log both.  */

function convertCase(text:string){
    let upperStr = text.toUpperCase()
    // It convert text to UpeerCase

    let lowerStr = text.toLowerCase()
    // It convert to lowerCase

    console.log(`Output For UpperCase: ${upperStr} \nOutput for LowerCase: ${lowerStr}`)
}

convertCase("my name is SHEHROZ")




// Question 84: 
/*Replacing text in a string:Write a function that takes a sentence and replace all instance of the world "JavaScript" with TypeScript.  */


function replaceStr(str:string){
//   
      
  return str.replace(/JavaScript/gi, "TypeScript")
}

console.log(replaceStr("I love javaScript and JavaScript is best"))
