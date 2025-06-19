console.log("hollo world");
// var,let,const
// var is function scoped or globally scoped
// let and const are block scoped
// var can be redeclared and updated
// let can be updated but not redeclared

var a = 10;
let b = 20;
const c = 30;
console.log(a);
console.log(b);
console.log(c);

// example

const user = "Zara";
console.log(user);

const insid = function () {
  let greetion = "Hello";
  // console.log(greetion); // it's workind ✅
  console.log(user);
};
insid();
// console.log(greetion); // it's not working ❌
// ---------------------------------- //
// Data tipes
// Primitive data types
// 1. String
let name = "Usama";
// 2. Number
let age = 23;
// 3. Boolean
let isDeveloper = true;
// 4. Undefined
let notDefined;
// 5. Null
let emptyValue = null;
// 6. Symbol (ES6)
let uniqueSymbol = Symbol("unique");
// 7. BigInt (ES11)
let bigIntValue = BigInt(1234567890123456789012345678901234567890);

// Non-primitive data types
// JavaScript has only one non-primitive data type:Object
// But Array, function,data,regex,map,set,atk, These are all special types (subtypes) of object itself.
// ---------------------------------- //
// 1. Object
// Data to key-value (kry = name: value = "Usama") mein store karta hai
const usamaObj = {
  name: "Usama",
  age: 23,
  isDeveloper: true,
  skills: ["JavaScript", "React", "Node.js"],
  address: {
    city: "Karachi",
    country: "Pakistan",
  },
};
console.log(usamaObj.skills[0]); // Accessing an array element
// ---------------------------------- //
// 2. Array
// ordered list of items
let numbers = [1, 2, 3, 4, 5];
// ---------------------------------- //
// 3. Function
//Reusable code block
function greet() {
  console.log("Hello, World!");
}
greet();
// ---------------------------------- //
// 4. Date
// Time & date handle karta hai
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1); // method 0 based indexing used +1
console.log(now.toDateString()); // Tue Jun 17 2025
// ---------------------------------- //
// 6. Map (ES6)
// key-value pairs with any type of key
const date = ["2023,01,10", "2024,06,12", "2025,12,10"];
const formattedDate = date.map(formatDate);
console.log(formattedDate);
function formatDate(el) {
  const parts = el.split(",");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
// ---------------------------------- //
// 7. Set (ES6)
// Unique values ka collection
const number = [10, 19, 10, 10, 0, 0, 0, 0, 15, 2415, 52];
console.log(new Set(number));
console.log(new Set(number).size);
console.log(new Set(number).has(1020));
console.log(number);
// ---------------------------------- //
// 8. RegExp // regexr.com
// Pattern matching ya validation(like email,password)
const regex = /amazing/g;
const text = "javaScript is amazing tech amazing speed and amazing for web!";
console.log(text.replace(regex, "AMAZING"));
console.log(text);
// ---------------------------------- //
// .9 WeakMap
// Map jaisa hi,but keys weakly referenced (memory optimized)
//.10 WeakSet
// Set jaisa but values weakly referenced
// ---------------------------------- //

//Operators
const x = 10;
const y = "10"; // if it,s value is string then return this {10 '10' '1010'}
const xy = x + y; // 20
// const xy = x - y; // 0
console.log(x, y, xy);
console.log(x == y); //true
console.log(x === y); //false
console.log(x != y); //false
console.log(x !== y); //true
/////////////////////////////
// value same type convert ho gaya (loose check)
console.log(5 == "5"); // true

// Value same type different (strict check)
console.log(5 === "5"); //false

// Value same after conversion
console.log(5 != "5"); // false

// Type alag (number vs string)
console.log(5 !== "5"); //true

// true becomes 1 in loose comparison
console.log(true == 1); // true

// type alag (boolean not = number)
console.log(true === 1); // false

// Special loose rule in JS
console.log(null == undefined); //true

// type different
console.log(null === undefined); //false

// ---------------------------------- //
//Conditionals
// if else if
const usamaAge = usamaObj.age;
if (usamaAge >= 20) {
  console.log("Wow you are 20+ 😲");
} else if (usamaAge >= 25) {
  console.log("Brother you need to find a job 👷‍♂️");
} else {
  console.log(`It's time to focus study 👨‍🎓`);
}
// switch ,? (ternary)
// const mood = prompt("enter you mood (using small letter)");
// switch (mood) {
//   case "happy":
//     console.log("Keep smaling 😁");
//     break;
//   case "sad":
//     console.log("Cheer Up ✨");
//     break;
//   default:
//     console.log("just be you!");
// }

// ?
const score = 75;
const grade =
  score >= 90
    ? `${score}% grade A `
    : score >= 80
    ? `${score}% grade B `
    : score >= 70
    ? `${score}% grade C `
    : "Fail";
console.log(grade);
// ---------------------------------- //
// loops (for, while)
// print name with loop
for (let i = 1; i <= 10; i++) {
  // console.log(`${i} Usama`);
}
// while
let i = 1;
while (i <= 10) {
  // console.log(`${i} Usama`);
  i++;
}

let dice = Math.trunc(Math.random() * 10) + 1;
console.log(dice);

// ---------------------------------- //
// Function (declaration, expression, arrow)
//declaration
function sayHello() {
  console.log("Hello Developer");
}
sayHello();

//expression
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 5));

//arrow
const arrowAdd = (a, b) => a + b;
console.log(arrowAdd(3, 2));

// ---------------------------------- //
// Array and bisic methods(push,pop,map,forEach)
const arr = [1, 2, 3, 4];
console.log(arr.push(100)); // push
console.log(arr.pop(arr.at(-1))); // pop and at

const fruits = ["apple 🍎", "banana 🍌", "cherry 🍒"]; //forEach
fruits.forEach((fruits, index) => {
  console.log(`${index + 1} ${fruits}`);
});

const userData = [
  { name: "usama", age: 23 },
  { name: "zara", age: 13 },
  { name: "jonis", age: 33 },
]; // map

const names = userData.map((user) => user.name);
console.log(names);

// ---------------------------------- //
// Objects (basic use)
// it's Objects
const person = {
  name: "Usama",
  age: "23",
  isDeveloper: true,
};
//basic use
// Accessing Object properties
console.log(person.name); //Usama
console.log(person["age"]); //23
// Updating Object values
person.name = "zara";
person.age = 18;
console.log(person); //{name: 'zara', age: 18, isDeveloper: true}
// Adding new property
person.uiuxDesigner = "true";
console.log(person);
//deleting a property
delete person.isDeveloper;
console.log(person);

// object with function
const user1 = {
  name: "Alix",
  greet: function () {
    console.log("Hello " + this.name);
  },
};
user1.greet(); //Hello Alix
//loop through object
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Array of objects
const users = [
  { name: "Usama", age: 23 },
  { name: "sara", age: 20 },
  { name: "Ali", age: 33 },
];
console.log(users[1].name); //sara
