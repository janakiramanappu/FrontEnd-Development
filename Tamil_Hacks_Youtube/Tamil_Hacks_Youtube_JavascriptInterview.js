// Javascript Interview Concepts

// Hoisting

// Normal way of executing the code using variables and functions
var name_hoisting = 'welcome';

function one_hoisting() {
    console.log("one hoisting function is called");
}

console.log(name_hoisting);             // welcome
one_hoisting();                         // one hoisting function is called
console.log(one_hoisting);

// By using Hoisting for variables

var name_hoisting_0 = 'hoisting_0';
console.log(name_hoisting_0);           // hoisting_0

console.log(name_hoisting_1);           // undefined
var name_hoisting_1 = 'hoisting_1';

console.log(name_hoisting_2);           // undefined
var name_hoisting_2;

// console.log(name_hosting_3);            // Tamil_Hacks_Youtube_JavascriptInterview.js:20  Uncaught ReferenceError: name_hosting_3 is not defined

// By using Hoisting for normal functions

function one_hoisting_0() {
    console.log("one_hositing_0");
}

one_hoisting_0();
console.log(one_hoisting_0);

one_hoisting_1();
console.log(one_hoisting_1);

function one_hoisting_1() {
    console.log('one_hoisting_1');
}

// By using hoisting for arrow functions (ES6)

var one_hoisting_2 = () => {
    console.log("one_hoisting_2");
}

one_hoisting_2();
console.log(one_hoisting_2);

// one_hoisting_3();                       // Uncaught TypeError: one_hoisting_3 is not a function at Tamil_Hacks_Youtube_JavascriptInterview.js: 54: 1
console.log(one_hoisting_3);               // undefined 

var one_hoisting_3 = () => {
    console.log('one_hoisting_3');
}

// Basic JS Type Conversion

a = 1;
b = '1';

if (a == b) {
    console.log('Type conversion will happen using double equals');
}

if (a === b) {
    console.log('Type conversion will happen using triple equals');
} else {
    console.log('Type conversion will not happen using triple equals');
}

// coercion - Implicit type coercion (type conversion)

c = 10;
d = '1';

console.log(c + d);
console.log(c - d);
console.log(d + c);
console.log(d - c);