// JavaScript has 8 Datatypes
// String
// Number
// Boolean
// Object
// Undefined
// Null
// Symbol
// Bigint


//  Numbers

let num1 = 25;
let num2 = 36.678;
console.log(num1, num2)
console.log(typeof num1)

// Strings

let fname = "fistName"
let lname = 'lastname'
console.log(fname + " " + lname)
console.log(typeof (fname))

// booleans true means 1 and false means 0

let loggedIn = false


// null
// intentional absence of value
let lastLoggedIn = null // we can set any value later and its like reserved and the place is taken and basiclly on objects type
// null: You assign it manually

// let person = {
//   name: null, // intentionally no name
//   age: 25
// };



// undefined
// absence of value by default
let notHere = undefined // not existing basiclly on premoitives

// undefined: Automatic by JavaScript

// let a;
// console.log(a); // ✅ undefined

// function test() {}
// console.log(test()); // ✅ undefined (no return)

// typeof undefined; // ✅ 'undefined'
// typeof null;      // ⚠️ 'object'

// null === undefined; // ❌ false
// null == undefined;  // ✅ true (loose equality)


// Objects

const person = {
    fName: 'firstname from object',
    lname: 'lastName',
    age: 22,
    isloggedIn: false,
    printInfo: function () {
        console.log(this.fName)
    },
}

person.printInfo()

// booleans 1 and 0

if (1 - 1) {
    console.log("Ture cndtn") // this will not work bcz 1-1 is 0 which is internally false
}

if (-1) {
    console.log("Ture cndtn")
}

if (10) {
    console.log("Ture cndtn")
}



console.log('2' + 2);  //return 22
console.log('2' * 2); // return 4
console.log('a' * 1); // return NaN


if ('a' * 1) {
    console.log("worked")
}else{
    console.log("not worked")
}


if ('a' + 1) {
    console.log("worked")
}else{
    console.log("not worked")
}