// Inside Block
// var Keyword

var a = 5;
console.log(a);

var a =10;
console.log("redeclared ",a); // redeclare

a = 15;
console.log("updated ",a); // update

{
    console.log("Inside Block ",a);
    var b = 20; // Inside Block
    console.log(b);
}
console.log("global ",a);
console.log("block ",b); // global-scope

console.log(c); // hoisted variable declaration , not initialized
var c = 100;

// let Keyword

let i = 5;
console.log(i);

// let y = 10; // no redeclare

i = 10;
console.log("updated",i); // update

{

    console.log("Inside Block ",i);
    let j = 20; // Inside Block
    console.log(j);
}
console.log("global ",i);
// console.log("block ",j); // Block-scope

// console.log(k); // declaration not hoisted , not initialized
let k = 100;

// const Keyword

var c;
let l;
// const x;
console.log(c,l);

const x = 5; // value assigned
console.log(x); 

// const x = 10; // no redeclare
// x = 10; // no update
console.log(x);

{
    console.log("Inside Block ",x);
    const y = 10; // Inside Block
    console.log(y);
}
console.log("global ",x);
// console.log("block ",y); // Block-scope

// console.log(z);  // declaration not hoisted , not initialized
const z = 100;

/*---DataTypes---*/
// Primitive
let name = "user"
let age = 24;
let isEmpolyed = false;
let salary = null;
let designation;

console.log(typeof  name ,
            typeof age ,
            typeof isEmpolyed ,
            typeof salary ,
            typeof designation);

// typeof null = object

// --Number
let num = 100;
console.log(num);

console.log(10 + 10); // number added
console.log("10" + "10"); // string concatenated

// numeric strings  
console.log("100" / "10"); // js converts numeric str to numbers in this kind of operations.
console.log("100" * "10");
console.log("100" - "10");

// Number Coercion -  automatic or implicit conversion of values from one data type to another.
console.log(undefined + 20);
console.log(null + 10); // null = 0
console.log(true + 10 , false + 10); // true = 1 , false = 0
console.log(Number("10")); // Number - converts strings to numbers.
console.log(Number("abc")); // string cannot be parsed as a valid number, it returns NaN.

//methods
console.log(num.toString());
console.log(Number.isInteger(num));

// --String

let str1 = 'abc'
let str2 = "abc"
console.log(str1,str2);
console.log(`Strring is ${str1}`); //Template Literals -embed expressions within backticks (`) for dynamic string creation.

let s1 = ''; // empty string
console.log(s1);

let s2 = `welcome
    to
    Js`;
console.log(s2);

// Basic Operations
console.log(str2.length); // length of string
console.log(str1 + s2); // concat string

// --Boolean

console.log(Boolean(0)
            ,Boolean(1)
            ,Boolean(-0));

console.log(Boolean('')
            ,Boolean('abc'));

console.log(Boolean(undefined)
            ,Boolean(null)
            ,Boolean(NaN));

console.log(Boolean({})
            ,Boolean([]));

// --undefined

var n ;
console.log(n);

function noReturn () {
    console.log("Nothing to return");
}
console.log(`Returned value is ${noReturn()}`); 
// method or statement also returns undefined. Function that does not return any value.

const user = {name : "user1"} 
console.log(user.age); //Accessing a property that doesn’t exist in an object returns undefined.