// Values & Variables
// var myName = "Mohd Hassan";

// console.log(myName);

// Data types

/*  
var myName = "Mohd Hassan";
var myAge = 20;
var isStudent = true;

console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);

console.log(true + true);
console.log(true + false);
console.log(true - false);
console.log(false + true);
console.log(false - true);


// What is NaN

var myPhonenumber = 1214232423;
var myName = "Killshot";

console.log(isNaN(myPhonenumber));
console.log(isNaN(myName));


// Experessions & Operators

//console.log(5 + 20);

//5&20 is operand
//+ is operator
// expression is combination of operand and operator

// Assignment operator

var x = 5;
var y = 5;

//Arithmetic operator
console.log(5 + 20);
console.log(50 - 20);
console.log(5 * 2);
console.log(8 / 2);

console.log("remainder operator " + (91 % 9));


//Increment Decrement operator

// var num = 15;
// var newNum = num++;
// console.log(num);
// console.log(newNum);

var num2 = 15;
console.log(num2);
var prevNum = num2--;
console.log(prevNum);

//Comparison Operator 1h:32m

var a = 30;
var b = 10;

console.log(a == b);
console.log(a != b);
console.log(a > b);


//Logical operators

var a = 30;
var b = -20;

// AND operator [&&]
//operation is true if all of its expressions is true
console.log(a > b && b > 0);
console.log(a > b && b < 0);


// OR operator [||]

// one expression must be true
var a = 30;
var b = -20;
// console.log(a > b || b > 0);

// NOT operator
// Takes truth to falsy value

console.log(!(a > 0)); //makes true value to false


//String Concatenation Operator
// It concatenates two string value together
// Return another string

var t1 = "Hello ";
var t2 = "Mr Mohd Hassan";

console.log(t1 + t2);
console.log(t1  + " Mr Mohd Hassan");


// Challenge Time

//1

console.log(3 ** 3);

//2

console.log(21 + +"Hi");

//3

var a = 2;
var b = 3;
console.log("Before");
console.log("Num1 is : " + a);
console.log("Num2 is : " + b);

// Swapping

var temp = b;
var b = a;
a = temp;
console.log("After");

console.log("Num1 is : " + a);
console.log("Num2 is : " + b);


//4
var a = 5;
var b = 10;

a = a + b;
b = a - b;
a = a - b;
console.log("Num1 is : " + a);
console.log("Num2 is : " + b);


//Difference Between == & ===
var num1 = 5;
var num2 = "5";

console.log(num1 == num2); // only check value
console.log(num1 === num2); // checks data type too


// Control Statements and Loop

//1- If Else

var tom = "rain";

if (tom == "rain") {
  console.log("Bring Raincoat");
} else {
  console.log("Come as it is");
}

// check for leap year

// Leap year can be find out if given year is divisible by 4

var year = 2009;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("The year " + year + " is a leap year");
    } else {
      console.log("The year " + year + " is not a leap year");
    }
  } else {
    console.log("The year " + year + " is a leap year");
  }
} else {
  console.log("The year " + year + " is not a leap year");
}


// Challenge Time
// What is truthy and falsy values

//0 is false, undefined, null, NaN, false++ is false always
// 1 is true

if ((score = 1)) {
  console.log("Yay, We won the game");
} else {
  console.log("OMG, We lost the game");
}



//Conditional (ternary) opearators
// takes three operands

// variableName = (Condition) ? value1:value2

//Shorter Version of if else

var age = 18;
console.log(age >= 18 ? "You can vote" : "You cannot vote");


// Switch Statement

// Find the area of circle, triangle and rectangle

var area = "circle";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

if (area == "circle") {
  console.log("The area of the circle is : " + PI * r ** 2);
} else if (area == "triangle") {
  console.log("The area of the triangle is : " + (l * b) / 2);
} else if (area == "rectangle") {
  console.log("The area of the rectangle is : " + l * b);
} else {
  console.log("Please enter valid Data");
}

var area = "circle";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

// NoW using switch statement

switch (area) {
  case "circle":
    console.log("The area of the circle is : " + PI * r ** 2);
    break;
  case "triangle":
    console.log("The area of the triangle is : " + (l * b) / 2);
    break;

  case "rectangle":
    console.log("The area of the rectangle is : " + l * b);
    break;

  default:
    console.log("Please enter valid Data");
}



// While loop 2h:46m

var num = 0;

while (num <= 10) {
  console.log(num);
  num++;
}


// do-while loop

var num = 0;

do {
  console.log(num);
  num++;
} while (num <= 10);



// For loop

for (var num = 0; num <= 10; num++) {
  console.log(num);
}


//Table Challenge

for (var num = 1; num <= 10; num++) {
  console.log(`8 * ${num} = ` + num * 8);
}


// Functions in Javascript

// Block of code designed to perform a task

function add(a, b) {
  console.log(a + b);
}

add(10, 20);




//Function expression
// create a function and put it into the variable

function add(a, b) {
  console.log(a + b);
}

var funExp = add(100, 20);
funExp;


// Return Keyword

function add(a, b) {
  return (total = a + b);
}

var funExp = add(10, 20);
console.log(funExp);



//Anonymous Function

var funExp = function (a, b) {
  return (total = a + b);
};

console.log(funExp(2, 3));



// Fat Arrow Function

const add = (a, b) => {
  console.log(a + b);
};

add(20, 3);



// Arrays in Javascript

var fruits = ["Apple", "Kiwi", "Mangoes", "Watermelon"];
var myInfo = ["Mohd", 7071707194, "Mangoes", "Happy"];

console.log(myInfo[1]);



//Traversal in Array

var fruits = ["Apple", "Kiwi", "Mangoes", "Watermelon"];

// for (fruit in fruits) {
//   console.log(fruit);
// }

for (fruit of fruits) {
  console.log(fruit);
}



//For each loop

var fruits = ["Apple", "Kiwi", "Mangoes", "Watermelon"];

fruits.forEach(function (element, index, array) {
  console.log(element + "index : " + index + " " + array);
});


//Search and filter in array 4h:54m

//Array.prototype.indexOf()  =>

var fruits = ["Apple", "Kiwi", "Mangoes", "Watermelon"];

console.log(fruits.indexOf("Mangoes"));

//Returns -1 if none is found



//Array.prototype.lastIndexOf() =>

var fruits = ["Apple", "Kiwi", "Mangoes", "Watermelon"];

console.log(fruits.lastIndexOf("Mangoes"));



//Array.prototype.includes() =>
//Always do forward Search
var fruits = ["Apple", "Kiwi", "Mangoes", "Watermelon"];

console.log(fruits.includes("Kiwi"));



//Array.prototype.find()

// arr.find(callback(element[, index[, array]])[, thisArg])
//Returns only one element

const prices = [200, 300, 400, 500, 600, 650];

const findElem = prices.find((currVal) => {
  return currVal <= 400;
});

console.log(findElem);


// Array.prototype.findIndex()

const prices = [200, 300, 400, 500, 600, 650];

console.log(prices.findIndex((currVal) => currVal < 400));



// Array.prototype.filter()

//Returns a new array containing all elements of the calling
//array for which the provided filtering function returns true

const prices = [200, 300, 350, 400, 500, 600, 650];

const newPrice = prices.filter((elem, index) => {
  return elem < 400;
});

console.log(newPrice);

//Returns empty array if condition not satisfied



// How to sort an array

// Array.prototype.sort()

const months = ["March", "Jan", "Feb", "Dec", "Nov"];

console.log(months.sort());

const array1 = [1, 37, 3, 4, 56, 67, 3, 3, 2];

console.log(array1.sort());



//Array Subsection 4 ???? Perform CRUD

//Array.prototype.push()

//Push method adds elem at end of the array

const animals = ["chicken", "goat", "sheep"];
console.log(animals);

const count = animals.push("rice");
console.log(animals);
console.log(count);

animals.push("rice", "wheat", "Barley");
console.log(animals);



// Array.prototype.unshift()

// Adds at beginning of array

const animals = ["chicken", "goat", "sheep"];
animals.unshift("rice", "wheat", "Barley");
console.log(animals);



//Array .prototype.pop()

//Removes last element from an array
//Changes length of the array

const plants = [
  "brocolli",
  "cauliflower",
  "kela",
  "tomato",
  "cabbage",
  "bhindi",
];

console.log(plants);
plants.pop();
console.log(plants);
plants.pop();
console.log(plants);



// Challenge time

const months = ["Jan", "march", "April", "June", "July"];
console.log(months);

//1 : Add dec at end of the array

months.push("Dec");

console.log(months);

//2 update march to March

// const stringMonths = months.toString();
// console.log(stringMonths);

// const updatedMonths = stringMonths.toUpperCase().split(",");
// console.log(updatedMonths);


const months = ["Jan", "march", "April", "June", "July"];
console.log(months);

//1 : Add dec at end of the array

months.splice(months.length, 0, "Dec");
console.log(months);

//3 update march to March

const updateMonth = months.splice(1, 1, "March");
console.log(months);



// Challenge Time

// 1 - Find the sq root of each element in an array?

let arr = [25, 36, 49, 64, 81];

arr.forEach(squareRoot);

function squareRoot(value) {
  console.log(Math.sqrt(value));
}


// 2 - Multiply each element by 2 and return only those elements which are greater than 10?

let arr = [2, 3, 4, , 6, 8];

arr.forEach(multiplyGreater2);

function multiplyGreater2(value) {
  const newArr = value * 2;

  if (newArr > 10) {
    console.log(newArr);
  }
}



// Map and Reduce Method

//Array.prototype.map()

//Returns new array

const array1 = [1, 4, 9, 16, 25];

let newArr = array1.map((currElem, index, arr) => {
  return currElem > 9;
});

console.log(newArr);



const array1 = [1, 4, 9, 16, 25];

let newArr = array1.map((currElem, index, arr) => {
  return `Index no. = ${index} and the value is ${currElem}`;
});

console.log(newArr);



// Challenge by map method

let arr = [25, 36, 49, 64, 81];

let arrSqr = arr.map((currElem) => {
  return Math.sqrt(currElem);
});

console.log(arrSqr);



let arr = [2, 3, 4, , 6, 8];

let arrMulti = arr
  .map((currElem) => {
    return currElem * 2;
  })
  .filter((currElem) => {
    return currElem > 10;
  });

console.log(arrMulti);



// Reduce Method 6h22m

//Flatten an Array means to convert the 3d or 2d array into single dimensional array

let arr = [5, 6, 2];

let sum = arr.reduce((accumulator, currElem, index, arr) => {
  return (accumulator += currElem);
});

console.log(sum);

//Chaining

let arr = [2, 3, 4, , 6, 8];

let arrMulti = arr
  .map((currElem) => {
    return currElem * 2;
  })
  .filter((currElem) => {
    return currElem > 10;
  })
  .reduce((accumulator, currElem, index, arr) => {
    return (accumulator += currElem);
  });

console.log(arrMulti);



let arr = [5, 6, 2];

let sum = arr.reduce((accumulator, currElem, index, arr) => {
  return (accumulator *= currElem);
});

console.log(sum);


// How to flatten an array

//Converting 2d and 3d array into one dimensional array

const arr = [
  [
    "zone1",
    "zone3",
    "zone4",
    "zone5",
    "zone6",
    "zone7",
    "zone8",
    "zone9",
    "zone10",
  ],
];

let flatArrr = arr.reduce((accum, currVal) => {
  return accum.concat(currVal);
});

console.log(flatArrr);



// STRINGS IN JAVASCRIPT

// Finding a string in a string

const myBio = "I am Killshotxd";

console.log(myBio.indexOf("Killshotxd"));



const myBio = "I am Killshotxd";

console.log(myBio.lastIndexOf("l", 5));


// Searching for a string in a string

const myBio = "I am Killshotxd";

console.log(myBio.search("am"));




// Extracting String Parts

//There are 3 methods

//Slice(start, end)
//substring(start, end)
//substr(start, length)

//******* THE SLICE METHOD ********* 7h



var str = "apple, banana, kiwi";

// let res = str.slice(0, 4);
let res = str.slice(7);
console.log(res);


// Challenge Time

//Display only 280 char

let myTweets =
  "lorem IJSKJSKDKSDJKSD JDSKDJSDKDJSDJKDJSDDJ JDKSDJSDJKSDJSAAAXAJXOAXJOAXAXAX XJOAXJAOXJAOXJAXOAJXOAXJAOJXAOX X XAJXOAXJAOXAXJAOXJXJAOXJAOXAX XJOXAJXOAJXAJXOAXJOAXJAXJOAXJAXJOAXJAOXJAXOAXJOAXJXJDKSDJSDJKSDJSAAAXAJXOAXJOAXAXAX XJOAXJAOXJAOXJAXOAJXOAXJAOJXAOX X XAJXOAXJAOXAXJAOXJXJAOXJAOXAX XJOXAJXOAJXAJXOAXJOAXJAXJOAXJAXJOAXJAOXJAXOAXJOAXJX XOAJXOAXOAJO WHY DO WE USE IT";

let myActualTweet = myTweets.slice(0, 280);
console.log(myActualTweet);
console.log(myTweets.length);
console.log(myActualTweet.length);



// The Substring Method

var str = "apple, banana, kiwi";

let res = str.substring(0, 4);
console.log(res);




// The substr Method deprecated



// REPLACING STRING CONTENT

// String.prototype.replace(searchFor, replaceWith)

let myBio = "I am Killshotxd";

let myNewBio = myBio.replace("Killshotxd", "Mohd");
console.log(myNewBio);



let myBio = "I Killshotxd am Killshotxd";

let myNewBio = myBio.replaceAll("Killshotxd", "Mohd");
console.log(myNewBio);



// Extracting string characters

// 1- charAt()

let str = "HELLO WORLD";
console.log(str.charAt(0));



// 2- charCodeAt()

let str = "HELLO WORLD";
console.log(str.charCodeAt(str.length - 1));


// 3- Property access

var str = "HELLO WORLD";
console.log(str[0]);
console.log(str[1]);


// Other Useful methods

let myName = "Mr kILLshotxD";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

// The Concat method

let fName = "Mr";
let lName = "Killshot";

console.log(fName.concat(lName));
console.log(fName.concat(" ", lName));
console.log(fName + lName);
console.log(`${fName} ${lName}`);



// String.trim()

var str = "              Hello";
console.log(str);
console.log(str.trim());



// Converting a String to array

//split method

var txt = "a,b,c,d,e,f,g"; // String
console.log(txt.split(",")); // Split on commas
console.log(txt.split(" ")); // Split on spaces
console.log(txt.split("|")); // Split on pipe



// Date & Time in JavaScript

// Creating date objects
// 4 ways

new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)



// 1 - new Date()

let currDate = new Date();
console.log(currDate); // 2022-07-05T04:17:32.233Z
console.log(new Date().toLocaleString()); //5/7/2022, 9:47:32 am
console.log(new Date().toString()); // Tue Jul 05 2022 09:47:32 GMT+0530 (India Standard Time)



// 2- Date.now()

console.log(Date.now());



// 3 - new Date(year, month, ......)

var d = new Date(2022, 11, 24, 10, 33, 30, 0);
console.log(d); //2022-12-24T05:03:30.000Z
console.log(d.toLocaleString()); // 24/12/2022, 10:33:30 am



// new Date(dateString)

var d = new Date("August 1, 2000 11:13:00");
console.log(d);
console.log(d.toLocaleString());



// Dates Method

const currDate = new Date();

console.log(currDate.toLocaleString());
console.log(currDate.getFullYear());
console.log(currDate.getMonth());
console.log(currDate.getDate());
console.log(currDate.getDay());



// Practice Time

console.log(new Date().toLocaleTimeString()); // 10:00:09 am
//--
console.log(new Date().toLocaleDateString()); // 5/7/2022
//--
console.log(new Date().toLocaleString()); // 5/7/2022, 10:00:56 am



//****** MATH OBJECT **********
//----- 8h16m----------

console.log(Math.PI);

// Math.round()
let num = 10.365;
console.log(Math.round(num));

// Math.pow
// returns the value of x to the power of y

console.log(Math.pow(2, 3));
console.log(2 ** 3);



//Math.sqrt()

console.log(Math.sqrt(25));
console.log(Math.sqrt(36));
console.log(Math.sqrt(81));
console.log(Math.sqrt(66));



//Math.abs()
//Math.abs(x) returns the absolute (positive) value of x

console.log(Math.abs(-55));
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));
console.log(4-9);
console.log(Math.abs(4-9));



// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.4));
console.log(Math.ceil(99.1));

// Math.floor

console.log(Math.floor(4.4));
console.log(Math.floor(99.1));



// Math.min()
// Math.max()

console.log(Math.min(10, 20, 1560, 3, 0325, 44));
console.log(Math.max(10, 20, 1560, 3, 0325, 44));



// ------Math.random()---------

console.log(Math.floor(Math.random() * 10));



// Math.trunc
// Returns integer part of the number

console.log(Math.trunc(4.5));
console.log(Math.trunc(-99.1));



// -------DOM in JavaScript------

// Events in JavaScript

// 10h27m

// Objects  10h:50m

// key : value pair data structure

//1 - way

let bioData = {
  myName: "Killshot",
  age: 20,
  getData: function () {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.age}`);
  },
};

bioData.getData();




// 2- way

let bioData = {
  myName: "Killshot",
  age: 20,
  getData() {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.age}`);
  },
};

bioData.getData();



// Object as a value inside an object

let bioData = {
  myName: {
    fName: "Mr",
    lName: "Killshot",
  },
  age: 20,
  getData() {
    console.log(
      `My name is ${
        bioData.myName.fName + " " + bioData.myName.lName
      } and my age is ${bioData.age}`
    );
  },
};

bioData.getData();



// What is this object?

// The definition of "this" object is that it contains the current context

// The this object can have different values depending on where it is placed

// Example 1
console.log(this.alert("Awesome"));

// it refers to the current context and that is the window global object



let myName = "Killshot";
function myNames() {
  console.log(this.myName);
}

myNames();

// Undefined



const obj = {
  myAge: 20,
  myName() {
    console.log(this.myAge);
  },
};
obj.myName();



// this will not work with arrow function

// Destructuring in ES6 11h17m

// Array Destructuring

const myBioData = ["Mr", "Killahot", 20];

let [fName, lName, myAge] = myBioData;

console.log(fName);



// Object Destructuring

const myBioData = {
  fName: "Mr",
  lName: "Killshot",
  myAge: 20,
};

let { fName, lName, myAge } = myBioData;

console.log(fName);



// Object Properties 11h26m

// We can use Dynamic Properties

let myName = "Killshot";
const myBio = {
  [myName]: "Hello how are you?",
  [30 - 10]: "is my age",
};
console.log(myBio);


// no need to write key and value , if both are same

let myName = "Mr Killshotxd";
let myAge = 20;

const myBio = {
  myName,
  myAge,
};

console.log(myBio);



// Spread Operator

const colors = ["red", "green", "blue", "white"];

const myFavColors = [...colors, "Yellow", "violet"];

console.log(myFavColors);




// Es8 features

// String Padding

// const message = "my name is killshotxd";

// console.log(message.padStart(5));
// console.log(message.padStart(10));

// Object Values

const person = { name: "Kill", age: 90 };
console.log(Object.values(person));
console.log(Object.entries(person));

*/
