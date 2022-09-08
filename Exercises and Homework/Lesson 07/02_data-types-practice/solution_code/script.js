// Use a console.log to print out "hello world!" by using the given variables. Try using concatenation and interpolation for two different methods.
// How can you do interpolation? https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
// Using research sources, like Documentation and Stack Overflow, is a vital skill for programmers! 

const message = "hello";
const recepient = "world";

console.log(message + " " + recepient + "!");
// OR
// console.log(`${message} ${recepient}!`)

// One plus one is...? Research as many ways as you can for adding 1 to the number variable.
// Then, console.log the phrase "1 + 1 is 2" by using the updated value of the number variable.
let number = 1;
number = number + 1;
//OR
// number++;
//OR
// number+=1;
//OR (the rarely seen)
// ++number;

// Data types can cause unexpected issues in Javascript. Use the typeof operator to investigate and log the type of the following variables.
// Documetation on typeof: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
const programmingIsCool = true;
const clearancePrice = 1.99;
const lifeTheUniverseAndEverything = 42;
const theCruelestMonth = "April";

console.log("programmingIsCool is a " + typeof programmingIsCool);
console.log("clearancePrice is a " + typeof clearancePrice);
console.log("lifeTheUniverseAndEverything is a " + typeof lifeTheUniverseAndEverything);
console.log("theCruelestMonth is a " + typeof theCruelestMonth);