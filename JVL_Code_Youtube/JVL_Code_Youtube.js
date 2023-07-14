alert("Javascript is in alert pop-ups dialog box");

console.log("Javascript is printing in browser developer tool console");

document.write('Javascript is executing from document object')

let js = 'amazing';

console.log(js);

if (js == "amazing") alert('Javascript is amazing');

if (js == 'boring') alert("Javascript is boring");

let foo = 1;
let Foo = 2;

console.log(foo);
console.log(Foo);

var message;
message = 'Hello World';
console.log(message);

var messageStatement; messageStatement = "Hi Statement"; console.log(messageStatement);

console.log(5 + 15);
console.log('Sachin ' + 'Tendulkar')

var add = 1 + 1;
console.log(add);

function sayHello() {
    console.log("Say Hello");
}

sayHello
console.log("The say hello function without paranthesis", sayHello);

sayHello();
console.log("The say hello function in console log ", sayHello());

function funcScope() {
    let funcVar = 1;
    console.log(funcVar, globalVar);
    if (true) {
        let blockVar = 2;
        console.log(blockVar, funcVar, globalVar);
    }
    console.log(funcVar, globalVar);
}

let globalVar = 3;
console.log(globalVar);

funcScope();

var mango;
console.log("The mango value inside var is", mango);    // undefined

let grapes;
console.log("The grapes value inside let is", grapes);  // undefined

var mango;
mango = { name: 'john', company: 'ibm' };
console.log("The mango value inside var is", mango);
mango = 'a fruit from mangroove forest';
console.log("The mango value is updated inside var is", mango);

let banana;
banana = 10;
console.log("The banana value inside let is", banana);
banana = "a fruit from banyan tree";
console.log("The banana value is updated inside let is", banana);

// Uncaught SyntaxError: Missing initializer in const declaration
// const pineapple;    
// console.log("The pineapple value inside const is ", pineapple);
// const pineapple = { quality: 10, sales: '10kgs' };
const pineapple = 10;
console.log("The pineapple value inside const is", pineapple);
// Uncaught TypeError: Assignment to constant variable.
// pineapple = 'a healthy fruit';
// console.log("The pineapple value is updated inside const is");

var mango = 10;
console.log("The mango value is redeclared inside var is", mango);
mango = 'a salad';
console.log('The mango value is updated inside var is', mango);

// Uncaught SyntaxError: Identifier 'banana' has already been declared
// let banana = 'a fruit';
// console.log("The banana value is redeclared inside let is ", banana);
let banan = 'a fruit';
console.log("The banan value inside let is", banan);
banan = 100;
console.log("The banan value is updated inside let is", banan);

// Uncaught SyntaxError: Missing initializer in const declaration
// const salad;
// salad = 'a dish';
// console.log("The salad value inside const is", salad);
// Uncaught SyntaxError: Identifier 'pineapple' has already been declared
// const pineapple = 100;
// console.log("The pineapple value is redeclared inside const is", pineapple);

// object and array using const
const people = {
    name: 'god',
    age: 100000
}

people.name = 'goddess';
console.log("object using const", people);

const cars = ['BMW', 'Volvo'];
cars.push('Benz');
console.log("array using const", cars);

let person = 'appu';
let age = 26;
let qualification = 'B.E';
console.log(person, age, qualification);

person = 'usha', age = '74', qualification = 'B.Lit';
console.log(person, age, qualification);

// Mutliple variable declarations
let book = 'Harry Potter', author = 'JK Rowling', budget = 100000000;
console.log(book, author, budget);
// var book = 'Harry Potter', author = 'JK Rowling', budget = 100000000;
// console.log(book, author, budget);
// const book = 'Harry Potter', author = 'JK Rowling', budget = 100000000;
// console.log(book, author, budget);

// Execute below code in both console browser developer tools and code editor
// let god;
// god = 100;
// console.log(god);
// let god;
// console.log(god);

//Undeclared variable

// Uncaught ReferenceError: marker is not defined
// console.log("The undeclared variable is", marker);

var marker_1;
console.log("The declared variable without initialization is", marker_1);  // undefined

marker_2 = 'hello';
console.log("The variable without declaration is", marker_2);

// Hoisting

hoist = 100;
console.log("hositing without variables declaration first initialization and then declaring", hoist);


hoist_1 = 'a work';
console.log("hositing using var variables first initialization and then declaring", hoist_1);
var hoist_1;

// Uncaught ReferenceError: Cannot access 'hoist_2' before initialization
// hoist_2 = 1000;
// console.log("hositing using let variables first initialization and then declaring", hoist_2);
// let hoist_2;

// Uncaught SyntaxError: Missing initializer in const declaration
// hoist_3 = { namme: 'rabbi', number: 7 };
// console.log("hositing using const variables first initialization and then declaring", hoist_3);
// const hoist_3;

function codeHoist() {
    a = 10;
    let b = 20;
}

codeHoist();
console.log("The hoisting used inside function", a);
// Uncaught ReferenceError: b is not defined
//console.log(b);

// Scope and variable keyword scope

var t_var = 10;
function logName_var() {
    var p_var = 100;
    console.log(t_var, p_var);
    if (true) {
        var y_var = 1000;
        console.log(t_var, p_var, y_var);
    }
    console.log(t_var, p_var, y_var);
}
console.log(t_var);
logName_var();
console.log(t_var);

let t_let = 10;
function logName_let() {
    let p_let = 100;
    console.log(t_let, p_let);
    if (true) {
        let y_let = 1000;
        console.log(t_let, p_let, y_let);
    }
    console.log(t_let, p_let);
}
console.log(t_let);
logName_let();
console.log(t_let);

const t_const = 10;
function logName_const() {
    const p_const = 100;
    console.log(t_const, p_const);
    if (true) {
        const y_const = 1000;
        console.log(t_const, p_const, y_const);
    }
    console.log(t_const, p_const);
}
console.log(t_const);
logName_const();
console.log(t_const);

// Array Data Methods - Map and Filter
// map - array data we can change it to another data, from an array we can take a property value

const data = [
    { id: '1', title: "car" },
    { id: '2', title: "bus" },
    { id: '3', title: "plane" },
    { id: '4', title: "train" },
    { id: '5', title: "ship" }
];

const upperData = data.map((el) => {
    return el.title.toUpperCase();
    // return el.id;
});

console.log(upperData);

// filter - used to filter out certain values

const filterData = data.filter((ele) => {
    return ele.id % 2 == 0;
    // return true;
    // return false;
});

console.log(filterData);

// Splice and Slice

