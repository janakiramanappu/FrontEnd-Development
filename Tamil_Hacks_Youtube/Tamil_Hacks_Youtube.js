// This page have some basic fundamentals understanding of JS

/* External JavaScript file, use it inside head tag
Internal JavaScript file, use it inside body tag */

// script tag - use it inside or within the head and body opening & closing tags

alert("This is an alert message from External Javascript file")

// DataTypes - Number,String,Arrays,Objects - Don't need to define the datatype it will fetch according to value
var num = 10; // variable num will consider as a number datatype

var fruit = "Apple"; // String values will be inside single or double quotes
var m = 'a';

alert(num + " " + fruit + " " + m);

// Variables types - letters,numbers,underscore(_),dollarsign($)
var name_1 = "john";
console.log(name_1); // console.log will print the output in the browser developer tools of console section.
alert("The name is " + name_1)

var $age_1 = 10;
console.log($age_1);

var apple = "this is a fruit"; // Javascript is case-sensitive, the variables apple and Apple are two different variables
var Apple = "this is also a fruit";
console.log(apple, Apple);
console.log(apple, " ", Apple);
console.log(apple + "" + Apple);
console.log(apple + Apple);

if (apple === Apple) {
    console.log("Both value and datatype are same");
} else {
    console.log("Both value and datatype are different");
}

var num1 = 10;
var num2 = 20;
console.log(num1 + num2);

// Styles of Variables - Partial case, Camel case, Underscore
var MyName = "John"; // partial case
var myName = "Rambo"; // camel case
var my_name = "David"; // underscore

console.log(myName, MyName, my_name);

// Arrays

var array = [10, 20, 30, 40, 50]; // array index position starting from 0,1,2,3,......
console.log(array);
console.log(array[2], array[4]);

var animal = ["tiger", "elephant", "dolphin"];
console.log(animal);

var person = [1, "ears", "face", 8, 38, 'r'];
console.log(person);
person[6] = 100;
console.log(person);

var todo = ["wakeup", "workout", 90, 'i', 200];
console.log(todo);
todo.push("h1");
todo.push('q');
console.log(todo);
var len = todo.length;
console.log("The length is", todo.length, len);
todo.sort();
console.log("The sort is", todo);
todo.reverse();
console.log("The reverse is", todo);
// var sort = todo.sort(); // The Array.sort() method sorts the elements of an array.
// var rev = todo.reverse(); // The Array.reverse() method reverses the order.
// var toDo = ['wakeup', 'workout', 90, 'i', 200, 'h1', 'q'];
// console.log(toDo);
// var rev = toDo.reverse();
// console.log("variable rev is", rev);
// console.log('The reverse is', toDo, "-", toDo.reverse(), toDo);

// Loops - for, while, foreach
var i;
for (i = 1; i < 10; i++) {
    console.log(i);
}

var k = 1;
while (k < 5) {
    console.log(k);
    k++;
}

var arr = [10, 30, 50, 70, 90];
arr.forEach(function (arrnum) {
    console.log(arrnum);
})

// Condition - if, if-else

var app = 10;
var ball = 10;
var cat = 30;
if (app == ball) {
    console.log("values are same.");
} else {
    console.log("values are different.")
}

if (app == cat) {
    console.log("app and cat values both are different");
} else if (ball == app) {
    console.log("ball and app values both are same");
} else {
    console.log("some random values");
}

if (app == ball && ball == cat) {
    console.log("true");
} else {
    console.log("false");
}

var samp = "red";
switch (samp) {
    case 'red': {
        console.log("Red Color");
        break;
    }
    case 'blue': {
        console.log("Blue Color");
        break;
    }
    default: {
        console.log("Please choose a color");
        break;
    }
}

// Objects - Embedded Objects - object inside object, Objects Constructor
var people = {
    fname: 'ram',
    lname: 'laksh',
    age: 10,
    children: ['lava', 'kusa'],
    address: {
        doorno: 35,
        street: "andal street",
        city: 'trichy',
        state: 'TN',
    },
}

console.log(people);

console.log(people.fname + " " + people.lname + " " + people.age + " " + people.children + " " + people.address);
// above in the console.log of people.address displaying the output like [object object], don't use nested object along with key-value pairs

console.log(people.fname + " " + people.lname + " " + people.age + " " + people.children + " " + JSON.stringify(people.address));
// above console.log of people.address use JSON.stringify - to get the json in a string format

console.log(people.address);

console.log(people.address.doorno, people.address.street, people.address.city, people.address.state);

var vegetable = new Object(); // vegetable is an object
vegetable.name = "patoto";
vegetable.type = "sweet";
vegetable.color = "brown";
console.log(vegetable);
console.log(vegetable.name, vegetable.type, vegetable.color);


function car(carname, cartype, carcolor) {  // constructor function for car object
    this.carname = carname;
    this.cartype = cartype;
    this.carcolor = carcolor;
}
var carbrand = new car('benz', 'automatic', 'black');   // carbrand is an instance object where car is an object
var carbrand_first = new car('nano', 'test', 'white');  // carbrand_first is an instance object where car is an object

console.log(carbrand, carbrand_first);
console.log(carbrand.carname, carbrand.cartype, carbrand.carcolor);
console.log(carbrand_first.carname + " " + carbrand_first["cartype"] + " " + carbrand_first.carcolor);

// JavaScript - 3 hour course

console.log(2 + 5);
console.log(8 * 8);

console.log(2 * 2);
console.log("The addition of both numbers in single quotes is", '2' + '2');
console.log('The Subtraction of both numbers in double quotes is', "2" - "2");
console.log("The Multiplication of both numbers in single quotes is", '2' * '2');
console.log('The Division of both numbers in double quotes is', "2" / "2");
console.log("The Modulo of both numbers in single quotes is", '2' % '2');

console.log("Combination of both single & double quotes", "10" + '2');

console.log('9' + 2);
console.log('9' - 2);
console.log('9' * 2);
console.log('9' / 2);
console.log('9' % 2);

console.log(10 + '5');
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % '5');

var salary = 25000;
console.log(salary);
console.log(salary + 5000);

var humanName = 'peter';
console.log(humanName);
console.log('Hello, my name is ' + humanName);
console.log('Hello, my name is', humanName);

console.log("My name is", humanName, 'and my salary is', salary);

console.log(document.title);

console.log(alert("This is an alert in-built function"));

alert("my salary is", salary);

alert('my salary is ' + salary);

// functions - Reusability
function Welcome(humanName) {
    console.log("welcome onboard!!", humanName);
    alert("Welcome onboard!!", humanName);
}

Welcome(humanName);
Welcome("Abdul");

// Objects

var PersonName = "panda";
var PersonType = 'animal';

function checkBeings(PersonName, PersonType) {
    console.log("This is", PersonName, "which is an", PersonType);
}

checkBeings(PersonName, PersonType);

// user defined object
var PersonBeings = {
    PerName: 'cody',
    PerProfession: "cricket",
    PerPassion: 'animation',
    perSkills() {
        var perHobby = "pencil sketching";
        var perSkillsMsg = 'my hobby is ' + perHobby;
        return perSkillsMsg;
    },
    per_Skills() {
        var per_Hobby = 'animation';
        console.log('My hobby is ' + per_Hobby);
    },
    perFood: {
        favFood: 'Dosa',
        nonfavFood: 'nothing',
    }
}

console.log(PersonBeings)
console.log(PersonBeings.PerName, PersonBeings.PerProfession, PersonBeings.PerPassion);
console.log("Calling function inside objects", PersonBeings.perSkills());
PersonBeings.per_Skills();
console.log(PersonBeings.perFood);
console.log(PersonBeings.perFood.favFood, PersonBeings.perFood.nonfavFood);

// Arrays - using string, number, array of objects

var bikeColor = ['red', 'green', 'black', 'blue'];
var bikeModel = [1234, 66, 224567, 112, 95];
var bike = [
    { color: 'grey', model: 3884 },
    { color: 'white', model: 0801 }
]

console.log(bikeColor);
console.log(bikeModel);
console.log(bike);

console.log(bikeColor[2], bikeColor[0]);
console.log(bikeModel[1], bikeModel[3]);
console.log(bike[0], bike[1]);
console.log(bike[0].color, bike[0].model, bike[1].color, bike[1].model);

console.log(bikeColor);
bikeColor.push('yellow');
console.log(bikeColor);

// bikeColor.sort();
// console.log(bikeColor);
console.log(bikeColor.sort());

// bikeColor.reverse();
// console.log(bikeColor);
console.log(bikeColor.reverse())

console.log(bikeModel.sort());
console.log(bikeModel.reverse());

// Conditional Statements - Ternary Operators

var personAge = 16;
if (personAge >= 18) {
    console.log("Yes you can register");
}
else {
    console.log("No you can't register minimum age is 18");
}

var person_Age = personAge >= 18 ? 'can register' : "can't register";
console.log(person_Age);

// loops - display data in different ways as an output

var countNum = 0;
while (countNum < 5) {
    console.log("Print numbers in the browsers console section of open developers tools", countNum);
    countNum++;
}

let countNum_1 = 0;
do {
    window.alert("Print the numbers inside the alert pop-up boxes " + countNum_1);
    countNum_1++;
}
while (countNum_1 <= 3);

var i;
for (i = 0; i < 10; i++) {
    document.write("Print the numbers inside the browser ", i);
    document.writeln();
}

// if (personAge >= 18) {
//     // console.log(personAge+" "+person_Age);
//     console.log(document.getElementById('displayDataOutput').innerHTML);
//     // console.log(personAge + " is an age for major after 18");
// } else {
//     // console.log(personAge+" "+person_Age);
//     document.getElementById('displayDataOutput').innerHTML = "e";
//     //personAge + " is an age for minor before 18";
//     // console.log(personAge + " is an age for minor before 18");
// }

// Functions - normal, arrow, high order function (user defined function & built-in function)

var numberParaArg = 10;

// normal function
function add() {
    console.log(2 + 8);
}

function addParaArg(numberParaArg) {
    console.log(numberParaArg * 5);
}

add();
addParaArg(numberParaArg);

function add_1() {
    return (9 * 8);
}

function addParaArg_1(numberParaArg) {
    return numberParaArg * 6;
}

console.log(add_1());
console.log(addParaArg_1(numberParaArg));

// Arrow function
add_2 = () => {
    return (5 - 4);
}

addParaArg_2 = (numberParaArg) => {
    return numberParaArg * 7;
}

console.log(add_2());
console.log(addParaArg_2(numberParaArg));

add_3 = () => (10 / 8);

addParaArg_3 = (numberParaArg) => numberParaArg * 8;

console.log(add_3());
console.log(addParaArg_3(numberParaArg));

// Higher order function - User defined function
var numHighOrder = 100;

function twoX(numHighOrder) {
    return 2 * numHighOrder;
}

function threeX(numHighOrder) {
    return 3 * numHighOrder;
}

console.log(twoX(numHighOrder));
console.log(threeX(numHighOrder));

function multiplyHighOrder(whichNumber) {
    return function (valueHighOrder) {
        return valueHighOrder * whichNumber;
    }
}

var twox = multiplyHighOrder(2);
var threex = multiplyHighOrder(3);
console.log(twox(8));
console.log(threex(8));

// High order function - Built-in function like push, forEach
let bike_Color = ['red', 'blue', 'green', 'yellow', 'brown'];

console.log(bike_Color);

bike_Color.push('pink');

console.log(bike_Color);

bike_Color.forEach(availability)

function availability(bike_col) {
    console.log("The bike color " + bike_col + " is found");
}

// Higher order function - Array of Objects using map it will return an output in the form of array

var bikes = [
    { brand: 'nike', brandType: 'shoe', cost: 5000 },
    { brand: 'jockey', brandType: 'dress wear', cost: 6000 },
    { brand: 'hero', brandType: 'vehicle', cost: 9000 }
];

bikes_Data = (bikesData) => bikesData.brand;
var bikes_Result = bikes.map(bikes_Data);
console.log(bikes_Result);

function bikes_DataNormal(dataNormal) {
    return dataNormal.brandType;
}
var bikes_ResultNormal = bikes.map(bikes_DataNormal);
console.log(bikes_ResultNormal);

// var bikes_Res = bikes.map(bikes_Data).map(bikes_DataNormal);    // it will display as undefined
var bikes_Res = bikes.map(bikes_DataNormal, bikes_Data);           // it will take only the first parameter value as an output
console.log(bikes_Res);

// High order function - Array of Objects using filter it will return an output in the form of array

console.log("Before adding the new object into an array", bikes);

bikes.push({ brand: 'lifebuoy', brandType: 'soap', cost: 6900 });

console.log(bikes);

bikes_Filter = (bikesFilter) => bikesFilter.cost <= 7000;
var bikes_ResultFilter = bikes.filter(bikes_Filter);
console.log(bikes_ResultFilter);

bikes_FilterMore = (bikesFilterMore) => bikesFilterMore.brandType == 'soap';
var bikes_ResultMoreFilter = bikes.filter(bikes_Filter).filter(bikes_FilterMore);
console.log(bikes_ResultMoreFilter);