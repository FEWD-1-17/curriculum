const fruits = ["banana", "orange", "apple"];

// output each fruit to the console
console.log(fruits[0]); // will output "banana"
console.log(fruits[1]); // will output "orange"
console.log(fruits[2]); // will output "apple"


// 1
// You can ask for the index number of any array item
// Print the index of "orange" to the console
const fruitsOrangePosition = fruits.indexOf("orange");
console.log(fruitsOrangePosition);  // outputs '1'


// 2
// Print the length of the array to the console
// This gives us the length of the array
const fruitsLength = fruits.length; 
console.log(fruitsLength); // will output "3"


// 3
// .pop() removes the last item
// Print the removed item and the new array to the console
const poppedFruit = fruits.pop(); // "apple"
console.log(poppedFruit);
console.log(fruits); // fruits = ["banana", "orange"];


// 4
// .shift() removes the first item
// Print both the removed item and the new array to the console
const shiftedFruit = fruits.shift(); // "banana"
console.log(shiftedFruit);
console.log(fruits); // fruits = ["orange"];


// 5
// .push() adds whatever you pass into the method parenthesis to the end of an array
// Add "kiwi" to the end of the array
// Print the new array to the console
const pushedFruit = fruits.push("kiwi");
console.log(fruits); // fruits = ["orange", "kiwi"];


// 6
// .unshift() adds whatever you pass into the method parenthesis to the beginning of an array
// Add "cherry" to the front of the array
// Print the new array to the console
fruits.unshift("cherry");
console.log(fruits); // fruits = ["cherry", "orange", "kiwi"];


// 7
// .splice() to adjust array values (REMOVE)
// 1st number = index value for splice
// 2nd number = number of items to remove

// Remove the first item from the array
// Print the new array to the console
fruits.splice(1,1); // "orange"
console.log(fruits); // fruits = ["cherry", "kiwi"];


// 8
// .splice() to adjust array values (ADD)
// 1st number = index value for splice
// 2nd number = number of items to remove
// 3rd value = item to be added to array

// Add "pear" as the second item in the array
// Print the new array to the console
fruits.splice(1, 0, "pear");
console.log(fruits); // fruits = ["cherry", "pear", "kiwi"];


// 9
// reverse() reverses the order of the items in the array without modifying them
// Print your reversed array to the console
fruits.reverse();
console.log(fruits); // fruits = ["kiwi", "pear", "cherry"];


// 10
// join()  combines - or concatenates - an array into a string
// The string is separated by whatever you pass into the parentheses

// Join all the fruit together by the word "and" - dont forget spaces
// Print your new string to the console
const fruitsList = fruits.join(" and ");
console.log(fruitsList); // fruitsList = "kiwi and pear and cherry";



// 11
// Multi-dimensional arrays
// Access multidimensional arrays similarly to regular arrays
// First square bracket - array
// Second square bracker - item

const produce = [["kiwi", "pear", "cherry"], ["broccoli", "celery", "carrots"]];

// Print the entire first nested array to the console
console.log(produce[0]); // ["kiwi", "pear", "cherry"];



// 12
// Using bracket notation, print the second item of the first array to the console
console.log(produce[0][1]); // "pear"

// Using bracket notation, print the first item of the second array to the console
console.log(produce[1][0]); // "broccoli"


