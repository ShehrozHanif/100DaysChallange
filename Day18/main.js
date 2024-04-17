// Day18
// Question No 52
/* Make a smartPhone Object: Createa simply way to keep treak of a Smartphone's details. Include its brand, model and other key features like how
much storage it has, the size of its screen, and how long its battery lasts? */
let smartPhone = {
    make: "Iphone",
    model: "15 Pro",
    specs: {
        Storage: "512gb",
        scrrenSize: "6.7 inch",
        batteryLife: "24 Hour",
    }
};
console.log(smartPhone);
// Question 53
/* Pulling Apart Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages,
tools, and software frameworks. find a way to get three specific skills from tghe list and show them.? */
import chalk from "chalk";
let developerSkills = {
    languages: ["Python", "TypeScript", "JavaScript"],
    framework: ["React", "Angular", "Vue"],
    tool: ["Git", "Docker", "Webpack"],
};
let { languages, framework, tool } = developerSkills;
console.log(`Languages: ${chalk.yellow(languages[0])}, FrameWork: ${chalk.red(framework[0])}, Tool: ${chalk.green(tool[0])}`);
// Question 54
/*Making flexible Object keys:Learn how to set up a list where you can change the name of each section based on what you need at the moment,
like adjusting labels based on your choices. */
function dynamicObject(key, value) {
    let obj = {};
    obj[key] = value;
    return obj;
}
let userPreference = dynamicObject("Theme", "dark");
console.log(userPreference);
// function createObjectWithDynamicKey(key: string, value: string) {
//     let dynamicObject:any = {};
//     // Setting up a section in the list with a changeable name
//     dynamicObject[key] = value;
//     return dynamicObject;
// }
// // Using the flexible list setup for a user's preference
// let userPreference = createObjectWithDynamicKey("theme", "dark");
// // Showing the user's choice
// console.log(userPreference);
