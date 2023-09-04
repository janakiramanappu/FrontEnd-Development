// Javascript Interview Concepts

// Hoisting

// Normal way of executing the code using variables and functions
var name_hoisting = 'welcome';

function one_hoisting() {
    console.log("one hoisting function is called");
}

console.log(name_hoisting);             // welcome
one_hoisting();                         // one hoisting function is called
console.log(one_hoisting);              // It will print the entire function scope

// By using Hoisting for variables - var, let, const

var name_hoisting_0 = 'hoisting_0';
console.log(name_hoisting_0);           // hoisting_0

console.log(name_hoisting_1);           // undefined
var name_hoisting_1 = 'hoisting_1';

console.log(name_hoisting_2);           // undefined
var name_hoisting_2;

// console.log(name_hoisting_3);        // Uncaught ReferenceError: name_hoisting_3 is not defined

let name_hoisting_4 = "hoisting_4";
console.log(name_hoisting_4);           // hoisting_4

// console.log(name_hoisting_5);        // Uncaught ReferenceError: Cannot access 'name_hoisting_5' before initialization
let name_hoisting_5 = "hoisting_5";

// console.log(name_hoisting_6);        // Uncaught ReferenceError: Cannot access 'name_hoisting_6' before initialization
let name_hoisting_6;

const name_hoisting_7 = "hoisting_7";
console.log(name_hoisting_7);           // hoisting_7

// console.log(name_hoisting_8);        // Uncaught ReferenceError: Cannot access 'name_hoisting_8' before initialization
const name_hoisting_8 = "hoisting_8";

// console.log(name_hoisting_9);        // Uncaught ReferenceError: name_hoisting_9 is not defined if we only put this line 44 alone
// const name_hoisting_9;               // Uncaught SyntaxError: Missing initializer in const declaration

// By using Hoisting for normal functions

function one_hoisting_0() {
    console.log("one_hoisting_0");
}

one_hoisting_0();                       // one_hoisting_0 from line 50
console.log(one_hoisting_0);            // It will print the entire function scope

one_hoisting_1();                       // one_hoisting_1 from line 60
console.log(one_hoisting_1);            // It will print the entire function scope

function one_hoisting_1() {
    console.log('one_hoisting_1');
}

// By using hoisting for arrow functions (ES6)

// using various keywords like var, let, const in the line 66 for arrow function displays same output
var one_hoisting_2 = () => {
    console.log("one_hoisting_2");
}

one_hoisting_2();                           // one_hoisting_2 from line 66
console.log(one_hoisting_2);                // It will print the entire function scope

// one_hoisting_3();                        // Uncaught TypeError: one_hoisting_3 is not a function
console.log(one_hoisting_3);               // undefined 

var one_hoisting_3 = () => {
    console.log('one_hoisting_3');
}

// with var keyword we have defined arrow function for hoisting at line 76
// one_hositing_3 () - Uncaught TypeError: one_hoisting_3 is not a function
// console.log('one_hoisting_3') - undefined

// with let keyword we have defined arrow function for hositing at line 76
// one_hositing_3 () - Uncaught ReferenceError: Cannot access 'one_hoisting_3' before initialization
// console.log('one_hoisting_3') - Uncaught ReferenceError: Cannot access 'one_hoisting_3' before initialization

// with const keyword we have defined arrow function for hoisting at line 76
// one_hositing_3 () - Uncaught ReferenceError: Cannot access 'one_hoisting_3' before initialization
// console.log('one_hoisting_3') - Uncaught ReferenceError: Cannot access 'one_hoisting_3' before initialization

// Basic JS Type Conversion

a = 1;
b = '1';

if (a == b) {
    console.log('Type conversion will happen using double equals');     // This is the output
}

if (a === b) {
    console.log('Type conversion will happen using triple equals');
} else {
    console.log('Type conversion will not happen using triple equals'); // This is the output
}

// coercion - Implicit type coercion (type conversion)

c = 10;
d = '1';

console.log(c + d);     // 101
console.log(c - d);     // 9
console.log(d + c);     // 110
console.log(d - c);     // -9

// scope

a_scope = 1;

console.log(a_scope);               // 1
console.log(window.a_scope);        // 1
console.log(this.a_scope);          // 1

function b_scope() {
    console.log(a_scope);           // 1
    console.log(window.a_scope);    // 1
    console.log(this.a_scope);      // 1
}

b_scope();

// console.log(d_scope);        // Uncaught ReferenceError: d_scope is not defined
console.log(window.d_scope);    // undefined
console.log(this.d_scope);      // undefined

function c_scope() {
    d_scope = 2;    // var d_scope = 2 -> normal variable will execute but window & this keyword accessing the variable will give undefined
    // because we have defined var keyword inside the function that's the reason
    // this.d_scope = d_scope;  // If we define this line, then both window and this keyword accessing the variable will execute
    console.log(d_scope);           // 2
    console.log(window.d_scope);    // 2
    console.log(this.d_scope);      // 2
}

// console.log(d_scope);        // Uncaught ReferenceError: d_scope is not defined
console.log(window.d_scope);    // undefined
console.log(this.d_scope);      // undefined

c_scope();

console.log(d_scope);           // 2
console.log(window.d_scope);    // 2
console.log(this.d_scope);      // 2

// scope chain

a_scopechain = 1;           // code starts other than that it is global variable

if (a_scopechain == 1) {     // block
    b_scopechain = 1;
}

function c_scopechain() {   // function
    d_scopechain = 2;
    // console.log("function c_scopechain called");
}

c_scopechain();

// scope chain & lexical environment
// Block scope - access the variables from inside and outside the block scope

if (true) {

    e_scopechain = 1;
    f_scopechain = 2;
    g_scopechain = 3;

    var ee_scopechain = 4;
    const ff_scopechain = 5;
    let gg_scopechain = 6;

    console.log("Inside the block scope without declaring variable keyword", e_scopechain, f_scopechain, g_scopechain);     // 1 2 3
    console.log(window.e_scopechain, this.e_scopechain);        // 1 1
    console.log(window.f_scopechain, this.f_scopechain);        // 2 2
    console.log(window.g_scopechain, this.g_scopechain);        // 3 3

    console.log(ee_scopechain);             // 4
    console.log(ff_scopechain);             // 5
    console.log(gg_scopechain);             // 6

    console.log(window.ee_scopechain, this.ee_scopechain);      // 4 4
    console.log(window.ff_scopechain, this.ff_scopechain);      // undefined undefined
    console.log(window.gg_scopechain, this.gg_scopechain);      // undefined undefined
}

console.log("Outside the block scope without declaring the variable keyword", e_scopechain, f_scopechain, g_scopechain);    // 1 2 3

console.log(ee_scopechain);         // 4 - for the block scope in if statement - using var keyword we can access the variable inside and outside the block scope
// console.log(ff_scopechain);      // Uncaught ReferenceError: ff_scopechain is not defined
// console.log(gg_scopechain);      // Uncaught ReferenceError: gg_scopechain is not defined

console.log(window.e_scopechain, this.e_scopechain);    // 1 1
console.log(window.f_scopechain, this.f_scopechain);    // 2 2
console.log(window.g_scopechain, this.g_scopechain);    // 3 3

console.log(window.ee_scopechain, this.ee_scopechain);  // 4 4
console.log(window.ff_scopechain, this.ff_scopechain);  // undefined undefined
console.log(window.gg_scopechain, this.gg_scopechain);  // undefined undefined

//  Function scope - access the variables from inside and outside the function scope

function fn_scope() {
    fn1_scope = 7;
    fn2_scope = 8;
    fn3_scope = 9;

    var fn4_scope = 10;
    const fn5_scope = 11;
    let fn6_scope = 12;

    console.log("Inside the function scope without declaring variable keyword");
    console.log(fn1_scope);             // 7
    console.log(fn2_scope);             // 8
    console.log(fn3_scope);             // 9

    console.log(fn4_scope);             // 10
    console.log(fn5_scope);             // 11
    console.log(fn6_scope);             // 12

    console.log(window.fn1_scope, this.fn1_scope);      // 7 7
    console.log(window.fn2_scope, this.fn2_scope);      // 8 8
    console.log(window.fn3_scope, this.fn3_scope);      // 9 9

    console.log(window.fn4_scope, this.fn4_scope);      // undefined undefined
    console.log(window.fn5_scope, this.fn5_scope);      // undefined undefined
    console.log(window.fn6_scope, this.fn6_scope);      // undefined undefined
}

// console.log("outside the function scope without declaring variable keyword");
// console.log(fn1_scope);          // Uncaught ReferenceError: fn1_scope is not defined
// console.log(fn2_scope);          // Uncaught ReferenceError: fn2_scope is not defined
// console.log(fn3_scope);          // Uncaught ReferenceError: fn3_scope is not defined

// console.log(fn4_scope);         // Uncaught ReferenceError: fn4_scope is not defined
// console.log(fn5_scope);         // Uncaught ReferenceError: fn5_scope is not defined
// console.log(fn6_scope);         // Uncaught ReferenceError: fn6_scope is not defined

console.log(window.fn1_scope, this.fn1_scope);      // undefined undefined
console.log(window.fn2_scope, this.fn2_scope);      // undefined undefined
console.log(window.fn3_scope, this.fn3_scope);      // undefined undefined

console.log(window.fn4_scope, this.fn4_scope);      // undefined undefined
console.log(window.fn5_scope, this.fn5_scope);      // undefined undefined
console.log(window.fn6_scope, this.fn6_scope);      // undefined undefined

fn_scope();

console.log(fn1_scope);             // 7
console.log(fn2_scope);             // 8
console.log(fn3_scope);             // 9

// console.log(fn4_scope);                  // Uncaught ReferenceError: fn4_scope is not defined
// console.log(fn5_scope);                  // Uncaught ReferenceError: fn5_scope is not defined
// console.log(window.fn6_scope);          // Uncaught ReferenceError: fn6_scope is not defined

console.log(window.fn1_scope, this.fn1_scope);      // 7 7
console.log(window.fn2_scope, this.fn2_scope);      // 8 8
console.log(window.fn3_scope, this.fn3_scope);      // 9 9

console.log(window.fn4_scope, this.fn4_scope);      // undefined undefined
console.log(window.fn5_scope, this.fn5_scope);      // undefined undefined
console.log(window.fn6_scope, this.fn6_scope);      // undefined undefined

// By using keywords like var, const, let for scope

if (true) {
    var a_var = 40;
    const b_const = 41;
    let c_let = 42;

    // b_const = 43;                    // Uncaught TypeError: Assignment to constant variable.
    // by using const we cannot change values because it has fixed value

    c_let = 44;                         // by using let we can change the values

    console.log(a_var);                 // 40
    console.log(b_const);               // 41
    console.log(c_let);                 // 42 or 44
}

console.log('Outside the if block scope')
console.log(a_var);                     // 40
// console.log(b_const);                // Uncaught ReferenceError: b_const is not defined
// console.log(c_let);                  // Uncaught ReferenceError: c_let is not defined