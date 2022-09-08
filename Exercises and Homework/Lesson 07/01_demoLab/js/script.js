// ###########################################################
// ################## Intro to JavaScript ####################
// ###########################################################

// JS runs synchronously and top - down, meaning it updates itself on the latest information given on the bottom.

// Comments!
/* Single line comments: cmd/ mac ctrl/ pc */

/* Multiline comments: optn+shift+a mac ctrl+shift+a pc */

// Variables

// Use camelCaseNotation (first letter of the first word is small)
let darkSideOfTheMoon = "Trippy Pink Floyd"; // camelCase
const superFruit = "Acai Berry";

// Variables automatically get typed as a string when initialized.

// const: global scope, variable will not change, cannot updated
const favColor = "black";

//let: variables can be updated, but not re-declared
let color = "blue";
color = "green";

// do NOT change variable type!!
color = 56;
// NO! this is improper, terrible coding! do not do this and say we taught you!!

// Variables must start with a letter, underscore (_) or dollar sign ($) - any alphanumerics are ok after that
let vegetable = "cauliflower";
let _veggie = "broccoli";
let $veg = "squash";

// call typeof to get the variable type
console.log(typeof vegetable); // returns "String"

// Naming Conventions

// Pick something that makes sense
//let fruit = 56; // this does not make sense
let fruit = "orange"; // this value makes sense!!

const georgeWashington = function (a, b) {
  return a + b;
}
// no, this is nonsense, this is bad, it does not describe the function and is BAD.

const addNums = function (a, b) {
  return a + b;  
}
// YES! look how much sense this makes! it accurately describes the function! hooray! it's not bad, it's good!!

// keep it less than 3 words
const mySuperCoolAwesomeFunctionThatDoesAThing = function () {};

// don't want it to be too short or to not make sense
const paboi = function () {}; // no, nice try tho
const generateBird = function () {}; // yes, i understand this

// Number Variables

const number = 500;
const float = 55.5;
const total = number + float;
const multiplyTotal = number * float;

console.log(total);
console.log(multiplyTotal);

// Can call on isNaN to determine if something is a number or not
let numberOfBrainCells = 1.98e126
console.log(isNaN(numberOfBrainCells));

let x = 18;
console.log(x);

x * 2; // does not multiply, needs = assignment operator to reassign value
console.log(x);

x = x * 2; // same as line 85
console.log(x);

x *= 2; // same as line 82
console.log(x);

x = x + 4; // same as 91
console.log(x);

x += 4; // same as 88
console.log(x);

// String Variables

const apple = "apple";
const Monday = "The day we eat apples and learn about variables";

function fruitOfTheDay() {
  console.log(Monday);
}

fruitOfTheDay();

// Single or double quotes are fine!

const greeting = "Emma said, 'Hello!'";
const greeting2 = 'Marcelle said, "Hello!"';

// Concatenation - will always convert to a string

const cat = "DS";
const cat2 = "Kitten";

const sentence = "My cats " + cat + " and " + cat2 + " really want my attention!";

console.log(sentence);

// Template Literals
// uses backticks for the surround quote marks and interpolates the strings!

const interpolate = `My cat ${cat} and ${cat2} REALLY want my attention!!`;

console.log(interpolate);

// If you want to use actual quote marks inside your string, or other symbols that have JS meaning, you have to escape those characters with \
// This is annoyingly laborious: \n = new line, \t = tab, \' = single quote, \" = double quote
const declarationOfIndependence = '"We hold these truths to be self-evident, that all men are created equal, \n that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."';

console.log(declarationOfIndependence);

// Boolean Variables

const isAlive = true;
const isHungry = true;
const isTired = false;

if (isAlive) {
  console.log("Hooray!")
}

// False Values
// false
// 0
// ""
// NaN
// null
// undefined

// ANYTHING other than these values are true

// undefined does NOT equal empty, it is the default value of variables if you do not assign a value.
let nothing;
let stuff;

const iAmNothing = undefined; // this is weird

// null that does equal empty of no value
let empty = null;

Boolean(0); // false
Boolean("apple"); // true

// ! bang operator
// converts a value to its boolean opposite

!true; // return false
!apple; // return false
!!apple; // return true

if (!!isAlive){
  console.log("OH its okay");
}
 
// Outputs

// console.log
// your BEST FRIEND.
// places output from our JS file outside of the page and into the console instead
// access via DevTools
// used for testing
console.log(darkSideOfTheMoon);

// document.write
// writes to the browser itself after everything else has rendered.
// crude way to test
document.write("Your front end web development class brought to you by a team of super dorks");

// alert
// old, silly, occasionally still a thing i guess, but usually don't do this. 
// alert("You are using some OLD design, please deliver this message to your user in a better way!")


// Functions
// Save and invoke reusable blocks of code
// A block - is a section of code defined by {}

function run() {
  // code block will only run when the function is invoked
}

// will only execute the code if you invoke the function with ();
run; // returns the memory location of the function (calling) but this will not run
run(); // this will run the code block because we are INVOKING the function

// the difference between calling and invoking: thinks of magic being used like invoking a magic spell. calling is reading the spell book and invoking is using said spell.

function greet() {
  console.log("hello my lovely students!");
}

greet();
// invoking the function is what makes the code block inside the function happen

const excitingNews = "Did you hear Nine Inch Nails dropped a new single AND announced tour dates?";

function weekendUpdate() {
  let num = 1
  num += 1
  num++
  ++num
  console.log(excitingNews);
  console.log(num);
}

weekendUpdate();

// declaring a function with parameters AND arguments

function greetAgain(name){
  console.log("Hello " + name);
}

greetAgain("Teri");
greetAgain("Adonis");
greetAgain("Peter");

function addNumbers(a, b){
  console.log(a + b);
}

addNumbers( 5, 4 );
addNumbers(200, 400);

// function return
// used to return the value of a function
// return statement denotes that the function has ended. any code after will NOT be executed, it immediately exits the code block.

function addMoreNumbers(a, b) {
  return a+b;
}

addMoreNumbers(20, 45);

// Reusable function with conditional
// define variable, setup function, pass variable in, use a conditional for output

function marvelCinematicUniverse(year) {
  if (year >= 2008) {
    console.log("Avengers Assemble");
  } else {
    console.log("Somebody get Robert Downey Jr.");
  }
}

marvelCinematicUniverse(2011);