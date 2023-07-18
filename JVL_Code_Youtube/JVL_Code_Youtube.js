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
    console.log("print the variables using var keyword", t_var, p_var, y_var);
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

// Coercion

numberValue = 42;
stringEmpty = '';
stringValue = '0';
result = numberValue + stringEmpty;
result1 = numberValue + stringValue;
console.log(result, typeof (result), "-", result1, typeof (result1));

numberTwo = '7';
result2 = numberValue - numberTwo;
console.log(result2, typeof (result2));

// Logical operator return values

const logi = 42;
const logi_1 = 'JVLCode';
const logi_2 = null;

console.log(logi && logi_1, "-", logi_1 && logi_2, "-", logi_2 && logi);
console.log(logi_1 && logi, logi_2 && logi_1, logi && logi_2);

console.log(logi || logi_1, logi_1 || logi_2, logi_2 || logi);
console.log(logi_1 || logi, logi_2 || logi_1, logi || logi_2);

function logicalGreet(name) {
    console.log(`Hello ${name || 'visitor'}!`);
}
logicalGreet();
logicalGreet('Logesh');

// Equality Operator == and Strict Equality Operator ===

console.log(42 == '42');
console.log(42 === '42');
console.log(42 === '32');

// Closure - function within function

function outer() {
    var b_outer = 20;
    function inner() {
        var a_inner = 10;
        console.log("The closure that is function within function", a_inner + b_outer);
    }
    return inner;
}

let someFn = outer();
someFn();

// this keyword - access the object properties

function createCharacter(name_1) {
    return {
        name_1,
        greet: function () {
            console.log(`${this.name_1} says hello!!`);
        },
    }
}

const character = createCharacter('Appu');
character.greet();

const { greet } = createCharacter('John');
greet();

// new keyword

function CharacterClass(name_class) {
    this.name_class = name_class;
}

const character_class = new CharacterClass('Dravid');
console.log("The class new keyword", character_class);

// Prototypes

const avengers = {
    attack: function () {
        console.log('Swing!!');
    },
}

const fighter = {
    name: 'Hulk',
    __proto__: avengers,
}

fighter.attack();

function Avengersmarvel(name_marvel) {
    this.name_marvel = name_marvel;
    this.attack_1 = function () {
        console.log(`${this.name_marvel} Swings!!`);
    }
}

function Fightermarvel(name_marvel) {
    this.name_marvel = name_marvel;
}

Fightermarvel.prototype = new Avengersmarvel();

const fightermarvel = new Fightermarvel('Ironman');
fightermarvel.attack_1();

// class

class Charac {
    constructor(name_2) {
        this.name_2 = name_2;
    }
    attack_2() {
        console.log(`${this.name_2} attacks!!`);
    }
}

class Fight extends Charac {
    constructor(name_2) {
        super(name_2);
    }
}

const figh = new Fight('Captain America');
figh.attack_2();

// Javascript Tips - Convert to Boolean

const array_1 = ['a', 'b', 'c'];
console.log(array_1, array_1.length);
if (array_1.length > 0) {
    console.log("Array_1 is not empty");
} else {
    console.log("Array_1 is empty");
}
console.log(array_1.length > 0);

if (!!array_1) {
    console.log("Array_1 is not empty");
} else {
    console.log("Array_1 is empty");
}
console.log(!!array_1);

const array_2 = ['d', 'e', 'f'];
console.log(array_2, array_2.length);
if (!!array_2.length) {
    console.log("Array_2 is not empty");
} else {
    console.log("Array_2 is empty");
}
console.log(!!array_2.length);

const array_3 = [];
console.log(array_3, array_3.length);
if (!!array_3.length) {
    console.log("Array_3 is not empty");
} else {
    console.log("Array_3 is empty");
}
console.log(!!array_3.length);

// Javascript Tips - 3 ways to copy array

var cities = ['trichy', 'salem', 'madurai'];

var cities_copy = cities;
console.log(cities, cities_copy);

cities.push('namakkal');
console.log(cities, cities_copy);

cities_copy.push('pondy');
console.log(cities, cities_copy);

// 1. copy with slice

var fruits_1 = ['apple', 'banana', 'mango'];
var fruits_1_copy = fruits_1.slice(0);
fruits_1.push('grapes');
fruits_1_copy.push('pineapple');
console.log(fruits_1, fruits_1_copy);

// 2. copy with concat

var fruits_2 = ['cherry', 'guava', 'watermelon'];
var fruits_2_copy = [].concat(fruits_2);
fruits_2.push('lemon');
fruits_2_copy.push('dried fruits');
console.log(fruits_2, fruits_2_copy);

// 3. copy with spread operator

var fruits_3 = ['papaya', 'strawberry', 'kiwi'];
var fruits_3_copy = [...fruits_3];
fruits_3_copy.push('plum', 'pleach');
fruits_3.push('pear');
console.log(fruits_3, fruits_3_copy);

// push method

var vegetables = ['carrot', 'potato', 'tomato'];
console.log("The length of vegetables array is", vegetables.push('beans'));
vegetables.push('cabbage', 'brinjal');
console.log("The vegetables array is updated by adding some items", vegetables);

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

const data_splice = ['car', 'bus', 'helicopter', 'train'];

const removedArray = data_splice.splice(1, 2);

console.log(removedArray);
console.log(removedArray, "", data_splice, "", removedArray == data_splice);
console.log(data_splice.splice(0, 1), data_splice);

const data_slice = ['taxi', 'lorry', 'bicycle', 'auto'];

const getSliceArray = data_slice.slice(0, 2);

console.log(getSliceArray, "", data_slice, "", getSliceArray == data_slice);
console.log(data_slice.slice(1, 4), data_slice);

// concat

const array_concat1 = [1, 2, 3, 4, 5];
const array_concat2 = [6, 7, 8, 9, 10];
const array_concat3 = [11, 12, 13, 14, 15];

const concatArray = array_concat1.concat(array_concat2);

console.log(concatArray, "-", array_concat1.concat(array_concat2, array_concat3));

// find and findIndex

const dataIndex = [
    { id: 1, title: "first" },
    { id: 2, title: "second" },
    { id: 3, title: "third" },
    { id: 4, title: "fourth" },
];

const itemFindIndex = dataIndex.findIndex((elem) => {
    return elem.id == "2";
})

const itemFindIndex_1 = dataIndex.findIndex((elem_1) => {
    return elem_1.id == 2;
})

const itemFindIndex_2 = dataIndex.findIndex((elem_2) => {
    return elem_2.title == "third";
})

console.log(itemFindIndex, itemFindIndex_1, itemFindIndex_2);

const itemFind = dataIndex.find((ele_item) => {
    return ele_item.title == "fourth";
})

console.log(itemFind);

// Destructuring - using arrays and objects

const personName = ["Virat", "Rohit"];

const firstName = personName[0];
const lastName = personName[1];

console.log("The person name array is", personName, "The first name is", firstName, "The last name is", lastName);

const [firstPersonName, lastPersonName] = personName;
console.log("The person name array is", personName, "The first person name is", firstPersonName, "The last person name is", lastPersonName);

const personNameObject = {
    id: 1,
    name: "jack sparrow",
    loveWar: true,
    species: "alien",
};

console.log(personNameObject);

const { name, species } = personNameObject;
console.log("The person name object is", name, "The person species is", species);

const { name: person_name, species: person_species } = personNameObject;
console.log("The person name is", person_name, "The person species is", person_species);

// spread operator and rest operator

const introduction = ["my", "name", "is ", "john"];

const spreadArray = [...introduction];

console.log("THe introduction array", introduction);
console.log("The spread array", spreadArray);

console.log(spreadArray, introduction, spreadArray == introduction);

// Promise with async and await

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response.ok);
        if (!response.ok) throw new Error(response.status);
        const result_data = await response.json();
        return result_data;
    } catch (e) {
        console.log("The catch block within", e);
        // return "error occurred";
    }
};

fetchData().then((result_fetchData) => {
    console.log(result_fetchData);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("request finished!!");
})

// callback function

function myDisplayer(something) {
    console.log("The callback function", something);
}

function myCalculation(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculation(10, 20, myDisplayer);