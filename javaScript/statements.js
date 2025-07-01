// Variable Declaration
var variable = "variable";

// Assignment Statement
let value = 100;

// Expression Statement
let num1,num2
const add = num1 + num2;

// Control Flow statements
let mark = 25;
// IF 
if (mark > 40) {
    console.log("Passed");
}
// IF - ELSE
if (mark > 40) {
    console.log("Passed");
}
else {
    console.log("Failed");
}

// Switch Statement
let color = "red";
switch (color) {
    case "red" :
        console.log("Candy Red");
        break;
    case "blue" :
        console.log("Navy Blue");
        break;
    case "green" :
        console.log("Flouracent Green");
        break;
    default :
        console.log("Bad Colour");
}

// Break Statement
let choice = 1;
// with break;
console.log("with break");
switch (choice) {
    case 0 : 
    console.log("Zero");
    break;
    case 1 : 
    console.log("One");
    break;
    case 2 : 
    console.log("Two");
    break;
}
// without break
console.log("without break");
switch (choice) {
    case 0 : 
    console.log("Zero");
    break;
    case 1 : 
    console.log("One");
    case 2 : 
    console.log("Two");
    break;
}
// not using a break statement which means the block 
// will run for the next case also till the break statement not appear.

// In a For Loop (To come out of the Loop)
for (let i = 0; i < 5; i++) {
    if (i == 4) break;
    console.log(i);
}

// Continue Statement -  break the iteration of the loop and follow with the next iteration.
for (let i = 0;i < 10;i++){
    if(i % 2 == 0) continue;
    console.log(i);
}

// Return Statement -  used to end the execution of a function and return a value to the caller.
function sum (a,b) {
    return a + b;
}
console.log("sum =",sum(1,2));

// return from arrow function
const plus = (a,b) => a + b;
console.log(plus(5,10));

function emp (name,age) {
    return {
        Username : name,
        Age : age
    }
}
console.log(emp("user001",24));