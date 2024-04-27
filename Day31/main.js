// Day31
// Question 91: Create an Array[] of your three favourite fruits and add a new fruit to the end of the array.
let fruit = ["Apple", "Mango", "Banana"]; // Here we ceate an array[]
//now we have to add a new arry 
let addNewArray = fruit.push("orange");
console.log(fruit);
// Question 92:
// Write a function to remove the last element from an array and return the removed element.
function removeElement(arr) {
    return arr.pop();
}
console.log(removeElement(fruit));
console.log(fruit);
// Question 93:
// Find the index of "Banana" in an array of fruits and replace it with "kinno".
function replaceWithkinno(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1) {
        console.log(fruits[index] = "Kinno");
    }
}
const fruits = ["Apple", "Kiwi", "Banana", "Lemon"];
replaceWithkinno(fruits);
console.log(fruits);
export {};
