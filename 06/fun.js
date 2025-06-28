// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

function sayHello(name = "Sk") {
    console.log("Hello", name)
}

sayHello()
sayHello("Siva")

function sumOfNum() {
    let ans = 0
    for (let i = 0; i < arguments.length; i++) { // inbuilt arguments and ont need to pass as params
        ans += arguments[i]
    }
    console.log("Sum of given numbers :", ans)
}

sumOfNum(1, 2, 3)



function sumOfNumbers(...numbers) { // we need to spread the values from numbers
    let ans = 0
    for (let i = 0; i < numbers.length; i++) {
        ans += numbers[i]
    }
    console.log("Sum of given numbers :", ans)
}

sumOfNumbers(10, 20, 30)
console.log(sumOfNumbers)
console.log(typeof sumOfNumbers)
// from the examples above, sumOfNumbers refers to the function object, and sumOfNumbers() refers to the function result.
// The typeof a function is "function"

// But here’s the twist:

// Technically, functions in JavaScript are objects (specifically, callable objects).

// Internally:
// A function is an object that has:

// Properties

// Methods (like .call(), .bind(), .apply())

// A [[Call]] internal method — what makes it callable like a function

// You can even do:

// sumOfNumbers.customProp = "I am a property";
// console.log(sumOfNumbers.customProp); // ✅ Works! Because it's an object

sumOfNumbers.customProp = "I am a property";
console.log(sumOfNumbers.customProp); // 

// const fn = function() {};
// console.log(typeof fn); //  "function"

// const arrow = () => {};
// console.log(typeof arrow); //  "function"



// Arrow functions

// Arrow functions do not have their own this. They are not well suited for defining object methods.

// Arrow functions are not hoisted. They must be defined before they are used.

// Using const is safer than using var, because a function expression is always constant value.

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

//  this Keyword

// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.


const addValues = (a, b) => {
    console.log(a + b)
}
addValues(1, 2)

const addTwoVal = (a, b) => a + b; //it will return the sum

// arguments keyword is not in arrow fn
// rather we use rest/spread

const addValuesList = (...val) => {
    console.log(val)
}
addValuesList(3, 2, 4, 21, 3);
addValuesList("ub", "iuhb", "uyb");


// arrow fns are not hoisted
// sayHey();
// const sayHey=()=>{
//     console.log("Say hey"); ReferenceError: Cannot access 'sayHey' before initialization
// }

// Arrow functions do not have their own this. They are not well suited for defining object methods.


const person = {
    fName: 'firstname from object',
    lname: 'lastName',
    age: 22,
    isloggedIn: false,
    printInfo: () => {
        console.log(this)
    },
}
person.printInfo() // this will refer to global object that is window object rather than person object which is defined in

// call method
// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an object as an argument (parameter).

const person2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    fullName2: function () {
        console.log(this.firstName + " " + this.lastName)
    },
    fullInfo: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    },
}

console.log(person2.fullName());

const person3 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(person2.fullName.call(person3));
console.log(person2.fullInfo.call(person3, "TVM", "India")); // we can also pass arguments

// Apply()

// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

console.log(person2.fullName.apply(person3));
console.log(person2.fullInfo.apply(person3, ["TVM", "India"]));

// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
let largest = Math.max.apply(null, [1, 2, 3])
console.log("Largest element :", largest);


// bind() 

// Sometimes the bind() method has to be used to prevent losing this.
// When a function is used as a callback, this is lost.
// for eg

console.log("This will fullName print using this", person2.fullName());
//we are passing ths fn as callBack

setTimeout(person2.fullName2, 1000); // will give undefined

setTimeout(person2.fullName2.bind(person2), 1000);



// higher order functions and callbacks


function addSum(a, b, printAny) {
    let ans = a + b;
    printAny(ans)
}

function printAnyCb(val) {
    console.log("value from printAny :", val)
}


addSum(5, 8, printAnyCb)

// here above, printAny is act as callback and addSum act as higher order fn
// higher ordr fns acceps anothyer fns as arguments and even return a fun