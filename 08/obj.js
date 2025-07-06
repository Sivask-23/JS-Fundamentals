// 1. Shallow Copy
// A shallow copy creates a new object or array, 
// but copies only the top-level properties. 
// If the original object has nested objects, those are still referenced, not duplicated.



const details = {
    fullname: "Sivakumar S",
    address: { city: "Trivandrum" },
}

const shallowCopy = { ...details }
console.log(shallowCopy)

shallowCopy.fullname = "updated name"
shallowCopy.address.city = "updated city"  // this will change the original too that is affect the details object too
console.log(shallowCopy)
console.log(shallowCopy.address) // gives updated city 




// 2. Deep Copy
// A deep copy creates a new object recursively — including all nested objects. 
// The original and the copy are completely independent.


const original = {
    name: 'Alice',
    address: { city: 'Delhi' }
};


const deepCopy = structuredClone(original)
deepCopy.address.city = 'Mumbai';

console.log(original.address.city); // → 'Delhi' (unchanged ✅)


const deepCopy2=JSON.parse(JSON.stringify(original))

console.log(deepCopy2)
deepCopy2.address.city="Chennai"

console.log(original.address)



function myDeepCopy(value) {
  if (value === null || typeof value !== 'object') {
    return value; 
  }

  if (Array.isArray(value)) {
    return value.map(item => myDeepCopy(item));
  }

  const copy = {};
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      copy[key] = myDeepCopy(value[key]); 
    }
  }

  return copy;
}
