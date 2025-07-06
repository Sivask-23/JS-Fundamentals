// In JavaScript, block scope and function scope refer to how variables are visible and accessible in your code depending on where and how you declare them.

// 🔹 Function Scope
// Variables declared with var are function-scoped.

// This means the variable is only accessible inside the function where it was declared.

function test() {
  var a = 10;
  console.log(a); // ✅ Accessible
}
// console.log(a); // ❌ ReferenceError: a is not defined


// Even if you declare var inside a block (like an if or for), it's still scoped to the entire function, not just the block:


function example() {
  if (true) {
    var x = 100;
  }
  console.log(x); // ✅ 100, still accessible
}
example()


// 🔹 Block Scope
// Variables declared with let and const are block-scoped.

// This means they are only accessible within the block ({}) they were declared in.

{
  let a = 20;
  const b = 30;
  console.log(a); // ✅ 20
  console.log(b); // ✅ 30
}
// console.log(a); // ❌ ReferenceError
// console.log(b); // ❌ ReferenceError

