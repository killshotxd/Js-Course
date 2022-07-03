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

*/

//Conditional (ternary) opearators
// takes three operands

// variableName = (Condition) ? value1:value2

//Shorter Version of if else
