// js Function
// fn definition
function print(){
    console.log("Hello World!");
}
// fn calling
print()

//fn arguments 
// name - (parameter)
function printName (name) {
    console.log("Hi "+name+"!");
}
// passing argument
printName("Kevin")

// return value
function greet() {
    return "gud mrng"
}
console.log(greet());

// fn expression
// called Anonymous function
let total = function (a,b) {
    return a + b;
}
// named function
function sum (a,b) {
    return a + b;
}
console.log(total(10,20),sum(30,40));

// arrow function
let sqrt = (num) => {
    return num ** 2
}

console.log("square is " + sqrt(3));