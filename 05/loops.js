// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true


// The for statement creates a loop with 3 optional expressions:

// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }
// Expression 1 is executed (one time) before the execution of the code block.

// Expression 2 defines the condition for executing the code block.

// Expression 3 is executed (every time) after the code block has been executed.

let n = 5
for (let i = 0; i < n; i++) {
    console.log("i am priniting ", n, " times and my currently i am at ", i)
}

// for (;;) {
//     console.log("This will run forever unless stopped manually.");
// }

let count = 0;
for (; ;) {
    console.log("Running", count);
    count++;
    if (count === 5) break; // exits loop after 5 iterations
}

// for in 

// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
    text += person[x] + " ";
}

console.log(text)

// for of

const cars = ["BMW", "Volvo", "Mini"];

let text2 = "";
for (let x of cars) {
    text2 += x + " ";
}
console.log(text2)

// while loop

let ip = 1;
while (ip <= 10) {
    console.log(ip)
    ip++;
}
console.log("After while loop ip :", ip)

// do-while use if you dontknow the number of iterntns needed



// let ans = 35
// let input = 0
// do {
//     input = parseInt(prompt("Enter a number "))
// } while (input != ans);
// alert("Correct! You guessed it.");



// do {
//     input = parseInt(prompt("Enter a number "))
//     if (input == ans) {
//         alert("Winner");
//         break;
//     }
// } while (true);