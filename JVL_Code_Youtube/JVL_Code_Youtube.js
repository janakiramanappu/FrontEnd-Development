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

