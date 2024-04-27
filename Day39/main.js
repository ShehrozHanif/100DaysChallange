// Day 39
// Question 115: Use a switch Statement to log the days of the week based on number(1-7) 
function daysOfWeek(day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid Day number");
            break;
    }
}
daysOfWeek(2);
daysOfWeek(5);
daysOfWeek(10);
// Question 116: Create a switch case that matches several casses to the same code block, representing seasons
function severalSeasons(season) {
    switch (season) {
        case 12:
        case 1:
        case 2:
            console.log("Winter Season");
            break;
        case 4:
        case 5:
        case 6:
            console.log("Summer Season");
            break;
        case 7:
        case 8:
        case 9:
            console.log("Autumn Season");
            break;
        case 10:
        case 11:
            console.log("Fall Season");
            break;
        default:
            console.log("Invalid Month");
            break;
    }
}
severalSeasons(1);
severalSeasons(5);
severalSeasons(10);
severalSeasons(13);
// Question 117: Implement a Switch Statement that evalute an expression and uses the default case if none of these cases match.
function grade(grade) {
    switch (grade) {
        case "A":
            console.log("Good");
            break;
        case "B":
            console.log("Fine");
            break;
        case "C":
            console.log("Average");
            break;
        case "D":
            console.log("Poor");
            break;
        case "E":
            console.log("Need Improvement");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Enter a Valid Grade");
            break;
    }
}
grade("A");
grade("B");
grade("C");
grade("D");
grade("E");
grade("F");
grade("G");
export {};
