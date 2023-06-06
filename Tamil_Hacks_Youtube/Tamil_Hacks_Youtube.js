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

var apple = "this is a fruit"; // Javascript is case-sensitive
var Apple = "this is also a fruit";
console.log(apple, Apple);
console.log(apple, " ", Apple);
console.log(apple + "" + Apple);
console.log(apple + Apple);

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
var sort = todo.sort();
console.log("The sort is", todo.sort(), sort);
var rev = todo.reverse();
console.log('The reverse is', todo.reverse(), rev);

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
        console.log("Red Color");
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

console.log(people.fname + " " + people.lname + " " + people.age + " " + people.children);

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



// JavaScript Interview Questions - Simplilearn

// Removing Duplicates

let arrDuplicate = ['a', 'b', 'c', 'a', 'b', 'd'];

let call = arrDuplicate.filter((c, index) => {
    console.log(c, " ", index, " ", arrDuplicate.indexOf(c));
    return arrDuplicate.indexOf(c) == index;
});

console.log(call);