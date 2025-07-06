function loadData(callback) {
  setTimeout(() => {
    console.log("Data loaded");
    callback(); // run after delay
  }, 2000);
}

loadData(() => {
  console.log("Now do something else...");
});


// Callback Hell (Pyramid of Doom)
// When multiple async actions are nested inside each other, it becomes messy and hard to manage.

// doTask1(() => {
//   doTask2(() => {
//     doTask3(() => {
//       doTask4(() => {
//         console.log("All tasks done!");
//       });
//     });
//   });
// });
// Hard to read, debug, and handle errors.

// Solved using Promises.

// promises


// Creating a Promise

const myPromise = new Promise((res, rej) => {
  const val=0
  if (val) {
    res("done");
  }else{
    rej("failed");
  }
});

// Consuming a Promise

// .then() runs when the promise is resolved

// .catch() runs when the promise is rejected

myPromise
.then((result)=>{
  console.log("result from resolve fn will print after this")
  return result
})
.then((ans)=>{
  console.log("This is the result",ans)
})
.catch((er)=>{
  console.log("error occured",er)
})




// Error Handling in Chains
// If any .then() throws an error or a promise is rejected, the nearest .catch() will run.

// Promise.resolve()
//   .then(() => {
//     throw new Error("Oops!");
//   })
//   .then(() => {
//     console.log("Won’t run");
//   })
//   .catch(err => {
//     console.error("Caught error:", err.message);
//   });

// If a .then() throws an error, or returns a rejected promise, the next .then() is skipped, and control jumps to the nearest .catch().



// 🔹 1. Instance Methods (chained on a single promise)
// These are used after you create or receive a promise.

// Method	Description
// .then()	Runs when the promise is resolved
// .catch()	Runs when the promise is rejected
// .finally()	Runs regardless of resolved or rejected

// Promise.resolve("Hi")
//   .then(data => console.log("✅ then:", data))
//   .catch(err => console.error("❌ catch:", err))
//   .finally(() => console.log("🎉 Done!"));




// 🔹 2. Static Methods (called on Promise directly)
// Method	Description
// Promise.resolve(value)	Creates a resolved promise with value
// Promise.reject(error)	Creates a rejected promise with error
// Promise.all([p1, p2])	Resolves when all promises resolve; rejects if any fail
// Promise.race([p1, p2])	Resolves/rejects when first promise settles
// Promise.allSettled([p1, p2])	Waits for all, gives results no matter success or fail
// Promise.any([p1, p2])	Resolves with the first successful promise; fails only if all reject (ES2021+)


// async and await
// 🔸 What is async?
// The async keyword is used to define a function that always returns a Promise.

// Even if you return a plain value, it gets wrapped into a resolved Promise.

async function greet() {
  return "Hello";
}

greet().then(console.log); // "Hello"

// Behind the scenes: return "Hello" → Promise.resolve("Hello")


// 🔸 What is await?
// The await keyword pauses execution until the Promise is resolved or rejected.

// You can only use await inside async functions (or at top level in modern environments).


// async function fetchUser() {
//   const response = await fetch("/api/user");
//   const data = await response.json();
//   return data;
// }
// Here, the function pauses at each await until the Promise is settled, without blocking the rest of the JS engine.



async function example() {
  console.log("Start");

  const result = await Promise.resolve("Done");

  console.log(result);
}

example();
console.log("Outside");
