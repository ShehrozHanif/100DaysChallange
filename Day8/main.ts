//   Day 8
//  //            (Question No 22)

let arr:string[] = ["Nabil","Akbar","Huzaifa","Yazdani"]
// We make an Array[]
console.log(arr[4])
// Now we are producing Error by Accessing that index which dont exist
 console.log(arr[3])
//  Now we correctiong the Error

// The whole Summary of Question 22 is that making an Array and found an index Error than Recorrect that Error;





//    //            (Question No 23)

// 1) Contional Check
let ironMan = 'Shehroz'
console.log("Is ironMan == 'Shehroz'? I predict True.")
 console.log(ironMan == 'Shehroz')
//  Its basically conditional check  if true than print true if false than print false

console.log("Is iromMan == 'TonyStark'? I predict False.")
console.log(ironMan == 'TonyStark') 
// False Condition


// 2) Contional Check
let pti = 'ImranKhan';
console.log("Is pti == 'Imrankhan'? I predict True.")
console.log(pti == 'ImranKhan') // True Condition

console.log("Is pti == 'LeaderShip'? I predict False.")
console.log(pti == 'LeaderShip') // False Condition


// 3) Conditional Check
let sirZia = 'IT Revolution'
console.log("Is sirZia == 'IT Revolution'? I predict True.")
console.log(sirZia == 'IT Revolution') // True Condition


console.log("Is sirZia == 'Common Man'? I predict False.")
console.log(sirZia == 'Common Man') // False Condition


// 4) Contional Check
let china = 'Future Super Power'
console.log("Is china == 'Future Super Power'? I predict True")
console.log(china == 'Future Super Power') // True Condition


console.log("Is china == 'Economy Down'? I predict False")
console.log(china == 'Economy Down')  // False Condition

// 5) Contional Check
let karachi = 'Is not Crime Free'
console.log("Is karachi == 'Is not Crime Free'? I predict True")
console.log(karachi == 'Is not Crime Free') // True Condition


console.log("Is karachi == 'Safe City in the world'? I predict False")
console.log(karachi == 'Safe City in the world') // False Condition





// //           //        (Question No 24)      

// Again Testing True and False testing like you did earlier but this time use Array[] and checkiing whether item is in Array[] OR Not
//  If is in Array[] than Print True otherwise False

let bag:string[] = ["Laptop","Register","Charger","Brush","Pen","Different Accessorires"]
console.log("Is 'Pen' is available in bag?");
console.log(bag.includes("Pen")) // True Condition

console.log("Is 'Laptop' is available in bag?");
console.log(!bag.includes("Laptop"))  // False Condition     

// As you can see this is Array Testing


//  Numerical Test
console.log("Numberical Test")
console.log(60 > 50);  // True Condition 
console.log(90<30);    // False Condition

// Equality With String
console.log("Equality With String");
console.log("apple" == "apple");  // True Condition 

console.log("apple" == "Apple");  // False Condition


// Using the lowercase() Function:
console.log("Testing with lower case")
console.log("Shehroz".toLowerCase() == "shehroz") //True


// Testing with and and or Operator:
console.log("Testing with && , || Operator")
console.log(true && false);
console.log(true || false);