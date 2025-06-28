

let hour = 20;
let greeting;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting)
console.log(greeting instanceof String) // return false 
// bcs
// let greeting = new String("Good evening");
// console.log(greeting instanceof String); // ✅ true bcs we cvreated that string using String constructor

// ternery operator

const age = 20
let voteable = (age < 18) ? "Too young" : "Old enough";
console.log(voteable)



// switch

let value = 0;
switch (value) {
    case 1: {
        console.log("Hello 1")
    }
        break;
    case 2: {
        console.log("Hello 2")
    }
        break;
    default: {
        console.log("not 1 and 2")
    }
}


let age2 = 2
let gender = 'Male'

if (age2 > 18 && gender == 'Male') {
    console.log("Adult Male")
} else if (age2 < 18 || gender == 'Male') {
    console.log("not yet")
}

num = 2
if (!(num % 2 == 0)) {
    console.log("Odd")
}else{
    console.log("Even")
}