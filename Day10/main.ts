// Day 10
//  //     //          //        (Question NO 28)

let age:any = 26;
if(age < 2){
    console.log("its a baby")
}else if(age = 2 && age < 4){
    console.log("a person is a toddler")
}else if(age = 4 && age < 13){
    console.log("The person is a kid")
}else if(age = 13 && age <20){
    console.log("the person is a teenager")
}else if(age = 20 && age <65){
    console.log("the person is an adult")
}else{
    console.log("the person is an elder")
}
//  Declare a variable called age in which assign our age then with the help of if and else statement tell that at what age what should call

// 
// // //      //                   (Question 29)

let favourite_Fruit:string[] = ["Apple","Kinno","Mango"]
if(favourite_Fruit.includes("Apple")){
    console.log("you really like Apple")
}if(favourite_Fruit.includes("Kinno")){
    console.log("you really like Kinno")
}if(favourite_Fruit.includes("Mango")){
    console.log("you really like Mango")
}

// As you can make an arry[] in which place our favourite fruits and check with if statement if this appear in that Array so print as you can see.


//  //    //       //              (Question no 30)

let userName:string[] = ["admin","user1","user2","user3","user4"]

for(let i = 0; i<userName.length; i++){
    if(userName[i] === "admin"){
        console.log(`hello ${userName[i]} what you like to see a status report`)
        
    }else{
        console.log(`Hello ${userName[i]} thanks for logging again`)
    }
}

// As you can throgh iteration we did when userName === admin than print other console and when userName === to other it print other