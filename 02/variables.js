var age = 22
console.log(age)

age = "my age"

console.log(age)

// naming conv
// firtsname
// first_name
// FirstName Classes
// firstName preffered Camel Casing

// js is a loosily typed lang 
// dont need to specify dataType


// var -> Global scope

{
    var a = 10;
    console.log(a)
}
console.log(a)


// let -> block scope

// The let keyword was introduced in ES6 (2015)

// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same scope

// can reassign


if (true) {
    let b = "Hello"
}
// console.log(b)  shopw error bcs b is let and having block scope



// const

// The const keyword was introduced in ES6 (2015)

// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object

// But you CAN:

// Change the elements of constant array
// Change the properties of constant object

const age2=20 // must assigne value initially before using
console.log(age2)
// age2+=10;
// console.log(ag2) cause error bcs cannot reassign


// let and const must be declared before use.

// let and const does not bind to this.




// You cannot access a let or const variable before its declaration.

// If you try, you get a ReferenceError (not undefined like with var).

// console.log(a); // ❌ ReferenceError  @This happens because of the Temporal Dead Zone (TDZ).
// let a = 10; 


// let and const do not bind to this.

// In the global scope:


// var a = 1;
// let b = 2;

// console.log(window.a); // ✅ 1
// console.log(window.b); // ❌ undefined
// var becomes a property of the global object (window in browsers).

// let and const are not attached to window or globalThis.



// let and const are not hoisted.

// var is hoisted and initialized with undefined.
// let and const are hoisted but not initialized — they live in TDZ.