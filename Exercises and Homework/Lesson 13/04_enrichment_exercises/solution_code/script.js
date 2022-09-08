// 1
// Write a function that takes in an array of integers and returns the sum of all the numbers

function sumThemUp(myArray) {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }
  return sum;
}

console.log(sumThemUp([1, 2, 3, 4, 5]));

// 2
// Write a function that takes an array of strings and returns the same array in reverse ( without using the array reverse method )
// Hint: you can iterate through an array backwards using i-- in a loop

function reverseMe(myArray) {
  let reversedArray = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    reversedArray.push(myArray[i]);
  }
  return reversedArray;
}

console.log(reverseMe([1, 2, 3, 4, 5]));

// 3
// Write a function that prints the following structure to the console
// Hint: look up.repeat() for strings

// #
// # #
// # # #
// # # # #
// # # # # #
// # # # # # #

let count = 1;
let x = "# ";
for (let a = 0; a <= 6; a++) {
  console.log(x.repeat(count));
  count += 1;
}

// 4
// Write a function that takes in a string and returns true or false whether the string is a palendrome (spelled the same forwards and backwards).
// Hint: strings can become arrays with .split()

function palindrome(string) {
  string = string.toLowerCase();
  let newArray = string.split("");
  let reversedArray = newArray.reverse();
  if (newArray === reversedArray) {
    return true;
  }
  return false;
}

console.log(palindrome("race car"));

// 5
// Write a function that takes two arrays of 6 playing cards and determines which array is the winning (highest) hand.
// You can assume all "A"s "K"s "Q"s and "J"s count as 10

function findTheWinner(handOne, handTwo) {
  let handOneTotal = 0;
  let handTwoTotal = 0;

  // this can be done using the forEach array method...
  handOne.forEach(function (card) {
    if (card === "A" || card === "K" || card === "Q" || card === "J") {
      handOneTotal += 10;
    } else {
      handOneTotal += card;
    }
  });

  // ...or it can be done with a classic for loop
  for (let i = 0; i < handTwo.length; i++) {
    if (handTwo[i] === "A" || handTwo[i] === "K" || handTwo[i] === "Q" || handTwo[i] === "J"
    ) {
      handTwoTotal += 10;
    } else {
      handTwoTotal += handTwo[i];
    }
  }

  if (handOneTotal > handTwoTotal) {
    return "Hand one wins!";
  } else {
    return "Hand two wins!";
  }
}

console.log(findTheWinner(["K", 7, 10, "A"], [5, "Q", 10, 2]));
