
// ✅ 1. Lexical Scope — The Foundation
// Lexical scope means:

// A function can access variables from its parent scope — defined by the code structure, not runtime.
// JavaScript builds a scope chain at declaration time, not when functions are called.

// 🔄 2. What is a Closure?
// A closure is:

// A function that remembers and continues to access variables from its outer scope, even after the outer function has finished executing.


function counter(){
    let num=0
    return function(){
        num++;
        return num
    };
}

const count=counter()
console.log(count())
console.log(count())
console.log(count())
// Even though counter() is done running, the returned inner function remembers count.

console.log()

// 🔐 3. Private State via Closures
// You can use closures to hide internal state (like private variables):
// fun

function createUser(userName) {
    let password='secret'
    return{
        getName:()=>{
            console.log(userName)
        },
        checkPassword:(inp)=>{password===inp?console.log("Correct"):console.log("incorrect")}

    }
}

const user1=createUser("Siva")
user1.getName()
user1.checkPassword("secret")
// password is truly private — not accessible from outside.


// 🔥 4. Closures in Loops – Common Gotcha

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// // prints: 3, 3, 3 ❌
// Fix using let or IIFE:

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100); // ✅ 0, 1, 2
// }
// Why? Because let is block-scoped, so a new binding is created for each iteration — closure captures that.




