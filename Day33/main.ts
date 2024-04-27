// Day 33
// Question 97: Write a function that return a current date in the format "DD-MM-YYYY".

function currentDate():string{
    const today = new Date()
    const day = String(today.getDate()).padStart(2,"0");
    const month = String(today.getMonth()).padStart(2,"0");
    const year = today.getFullYear()
    return `${day}-${month}-${year}`
}
console.log(currentDate())

// Question 98:
// create a javaScript snippet that calculates and logs how many days left until new year.
function daysUntillNewYear(){
    const today = new Date()
    const newYear = new Date(today.getFullYear()+1,0,1);
    const milliSecondPerDay = 1000 * 60 *60 *24
    const diff = newYear.getTime() - today.getTime()
    const days = Math.ceil(diff / milliSecondPerDay)
    return days
}

console.log(daysUntillNewYear())

// Question 99: Generate a date Object representing your next birthday and log in to the console. 

function getNextBirthdayDate(birthdayMonth:number, birthdayDay:number):Date{
    const today = new Date()
    let year = today.getFullYear();
    const nextBirthDay = new Date(year, birthdayMonth -1, birthdayDay)
    if(nextBirthDay < today){
        nextBirthDay.setFullYear(year +1)
    }
     return nextBirthDay
}

console.log(getNextBirthdayDate)

// console.log(getNextBirthdayDate(12,24))

// function getNextBirthday(month: number, day: number): Date {
//     const today = new Date();
//     let year = today.getFullYear();
//     const birthday = new Date(year, month - 1, day); // Months are 0-indexed
//     if (birthday < today) {
//         // If the birthday this year has already passed, use next year's date
//         birthday.setFullYear(year + 1);
//     }
//     return birthday;
// }

// console.log(getNextBirthday(12,24))