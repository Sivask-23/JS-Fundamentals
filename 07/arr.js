const arr1 = ["sk", "siva", "kumar", "sooraj", "ms"]
const cars = new Array("Saab", "Volvo", "BMW", { brandName: "VW" });
console.log(arr1)
console.log(cars)

console.log(arr1.toString()) // comma sepretd values

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;

// console.log(person[0]) shows length as 0 and shows undefined

const ages = [12, 12, 4, 12, 34, 23, 32, 12, 56, 23, 12, 27, 34, 25, 67];

const adults = ages.filter((value, idx, ar) => {
    return value > 21;
})

console.log("Adult ones:",adults)

console.log(new Date().getFullYear())

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
console.log("Today is",day)
console.log(10e2)