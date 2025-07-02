// empty array
let emptyArr = [];
console.log(emptyArr);

// intializibg with values.
let valuesArr = [1,2,3,4,5]
console.log(valuesArr);

// accessing arr elements
let access = [10,20,30]
console.log(access[0]);
console.log(access[1]);
console.log(access[2]);

// access first&last arr element 
let firstlast = [1,2,3,4,5,6,7,8,9,10]
console.log(firstlast[0]);
console.log(firstlast[firstlast.length-1]);

// modify arr element
let mod = ['HTML','CSS','JSS','React'];
console.log(mod);
mod[mod.length-1] = 'Django'
console.log(mod);

// add element to arr
let add = [];
console.log(add);
// add element to the end 
add.push(1,2)
console.log(add);
// add element to the beginning
add.unshift(0);
console.log(add);

// remove element from arr
let remove = [0,1,2,3,4,5,6];
console.log(remove);
// remove element to the end 
remove.pop()
console.log(remove);
// remove element to the beginning
remove.shift()
console.log(remove);
// using splice method
remove.splice(4,1); // (index ,no of elements)
console.log(remove);

// arr length
let arrlength = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1];
console.log(arrlength.length);
// increase & decrease arr length
console.log(arrlength);
// increase
arrlength.length = 10;
console.log(arrlength);
// decrease
arrlength.length = 30;
console.log(arrlength);

// iterating through arr
let iterate = ['abc','def','ghi','jkl']
for (let ele of iterate) {
    console.log(ele);
}

// concat two arr 
let con = [0,2,4,6,8];
let cat = [1,3,5,7,9];
let concatArr = con.concat(cat)
console.log(con);
console.log(cat);
console.log(concatArr);

// conversion arr - str
let str = [0,1,2,3];
console.log(str);
console.log(str.toString());

// check type of arr
let type = ['a','b','c','d'];
console.log(typeof type);

// recognizing js arr
let recognize = [1,2,3,4,'a','b','c','d'];
console.log(Array.isArray(recognize));
console.log(recognize instanceof Array);