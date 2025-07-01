// For Loop - (initialization,condition,increment/decrement)
for (let i = 0; i < 5; i++) {
    console.log("count :" ,i+1);
}

// While Loop 
let count = 0 ; // initialization
while (count < 5) { // condition
    console.log("count :" ,count+1);
    count++; // increment/decrement
} 

// Do-While Loop
let doCount = 0 ;
do {
    console.log("Count :",doCount);
    doCount++;
} while (doCount <=5)

// For In - iterates over the properties of an object.
let car = {
    model : "Octavia",
    brand : "Skoda",
    year : 2018
};

for (let key in car) {
    console.log(`${key} : ${car[key]}`);
}

// Not Recommended
let numArr = [1,2,3,4,5];
for (let num in numArr) {
    console.log(numArr[num]);
}

// For Of - Works for iterable objects such as arrays, strings, maps, sets, and more.

let arr = [0,1,2,3,4,5];
for (let n of arr) {
    console.log("number in Arr = ", n);
}

let str = "STRINGS"
for (let char of str) {
    console.log(char);
}