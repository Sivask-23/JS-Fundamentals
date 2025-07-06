// 🧠 What is Composition?
// Composition is a design principle where objects or components are built by combining simple, 
// reusable behaviors (functions, objects, or components), rather than extending a class.


function canEat() {
  return {
    eat: () => console.log("Eating...")
  };
}

function canWalk() {
  return {
    walk: () => console.log("Walking...")
  };
}

function createPerson(name) {
  return {
    name,
    ...canEat(),
    ...canWalk()
  };
}

const person = createPerson("Siva");
person.eat();  // 👉 Eating...
person.walk(); // 👉 Walking...

console.group("User Info");
console.log("Name: Siva");
console.log("Age: 25");
console.log("correct")
console.groupEnd();

console.table([{ name: "A" }, { name: "B" }]);

console.time("loop");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("loop");
