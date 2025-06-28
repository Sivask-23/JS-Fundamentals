/* -----Arthematic Operator----- */
// --Addition 
console.log(10 + 20);
console.log("10" + "20");
console.log('abc' + 123);
console.log(true + 10);

// --Subtraction
console.log(10 - 20);
console.log('20' - '10');
console.log('abc' - 123); // NaN
console.log(false - 10);

// --Multiplication
console.log(10 * 20);
console.log('20' * '10');
console.log('abc' * 123); // NaN
console.log(true * 10);

// --Division
console.log(10 / 20);
console.log('20' / '10');
console.log('abc' / 123); // NaN
console.log(false / 10);

// --Modulus
console.log(10 % 20);
console.log('20' % '10');
console.log('abc' % 123); // NaN
console.log(true % 10);

// --Exponential - Raising the first operand to the power of the second operand.
console.log(2**2);
console.log(2**3);

// --Increment
/// Postfix
let a = 10;
b = a++; // x++ :- x = x + 1
console.log(a,b);
/// Prefix
let x = 10;
y = ++x;
console.log(x,y);

// --Decrement
/// Postfix
let i = 10
j = i--; // x-- :- x = x - 1
console.log(i,j);
/// Prefix
let m = 10
n = --m;
console.log(m,n);

/* -----Assignment Operator----- */
// --Normal
let n1 = 10;
let n2 = 20;
console.log(n1,n2);
n1 = n2;
console.log(n1,n2); 

n1 = 10; // updated
// Addition Assignment
console.log(n1 += n2); // n1 = n1 + n2
// Subtraction Assignment
console.log(n1 -= n2); // n1 = n1 - n2
// Multiplication Assignment
console.log(n1 *= n2); // n1 = n1 * n2
// Division Assignment
console.log(n1 /= n2); // n1 = n1 / n2
// Remainder Assignment 
console.log(n1 %= n2); // n1 = n1 % n2

/* -----Comparison Operator----- */
// Equality ==
console.log(5 == 5);
console.log(5 == '5');
///special values
console.log(NaN == NaN);
console.log(1 == true);
console.log(0 == null);

// Inequality !=
console.log(5 != 0);
console.log(5 != '5');
///special values
console.log(0 != false);
console.log(NaN != NaN);
console.log(0 != null);

//Strict equality === - compare the equality of two operands with type.
console.log(5 == 5);
console.log(5 === 5);
console.log(5 == '5');
console.log(5 === '5'); // false
///special values
console.log(0 == false);
console.log(0 === false); // false

// Strict Inequality !==
console.log(5 != 0);
console.log(5 !== 0);
console.log(5 != "5"); // false
console.log(5 !== "5");
///special values
console.log(1 != true); // false
console.log(1 !== true);

// Greater than >
console.log(10 > 20);
console.log('20' > 10);

// less than >
console.log(10 < 20);
console.log('20' < 10);

// Greater than or equal
console.log(20 >= 10);
console.log('20' >= 20);

// Less than or equal
console.log(20 <= 20);
console.log('10' <= 20);

/* -----Logical Operator----- */
// -AND &&
console.log(10 == 10 && 10 === '10'); // false
console.log(10 == 10 && "10" === '10');

// -OR ||
console.log(10 == 10 && 10 === '10'); // false
console.log(10 == 10 || 10 === '10');

// -NOT !
console.log(!(true));
console.log(!!(true));
console.log(!(false));
console.log(!!(false));

// -Nullish Coalescing Operator ??
console.log(null ?? "Nothing");
console.log("Something" ?? "Nothing");
/*returns the right-hand operand when the left-hand operand is either null or undefined. 
Otherwise, it returns the left-hand operand.*/

/* -----Ternery Operator----- */
let age = 11;
console.log(age >= 18? "Adult" : "Minor");

// Nested
let day =1;
let greeting = (day === 1) ? "Start of the week" :
                (day === 2) ? 'Second day' :
                 (day === 3) ? 'Midweek' :
                  (day === 4) ? 'Almost Weekend' :
                    "Weekend";
console.log(greeting);