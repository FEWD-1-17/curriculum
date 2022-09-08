/*
 * ################################################
 * Basic for loop
 * 
 * Iterates over array printing each animal to the console.
 * 
 */

const bigAnimals = ["elephant", "giraffe", "grizzly", "rhino", "bison", "panda", "komodo dragon"];

for (let i = 0; i < bigAnimals.length; i++) {
  console.log(bigAnimals[i]);
}


/*
 * ################################################
 * Basic for loop + conditional
 *
 * Combining an array, for loop, and a conditional statement
 *
 */

  const moreBigAnimals = ["walrus", "ostrich", "whale", "hippo", "musk ox", "lion", "polar bear"];

  for (let i = 0; i < moreBigAnimals.length; i++) {
    if (moreBigAnimals[i] === "whale") {
      console.log("We found the biggest animal of them all, the whale at array position " + moreBigAnimals.indexOf("whale"));
    }
  }


/*
 * ################################################
 * Basic for loop + printing to DOM
 *
 * Looping over an array to add each item as an element in the DOM
 *
 */

for (let i = 0; i <= 10; i++) {
  const animalItem = document.createElement("li");
  animalItem.innerText = bigAnimals[i];
  document.querySelector("#big-animals-list").append(animalItem);
}
// this gives us some interesting results - why is that?


// Limit to the length of the array
// This will get rid of the undefined values

for (let i = 0; i < bigAnimals.length; i++) {
  const animalItem = document.createElement("li");
  animalItem.innerText = bigAnimals[i];
  document.querySelector("#big-animals-list-2").append(animalItem);
}


/*
 * ################################################
 * While loop use case
 *
 * Use a while loop when there is no specific number of times a loop should continue, the code will execute until a specified condition is met
 * This can be useful when you have randomized data
 * Here's a crude example of having a deck of cards and randomly selecting an index until you get an ace
 */

// Array of Cards
const myDeck = ["A","2","3","4","5","6","7","8","9","10","J","Q","K",];
let i = 0;
let myCard;

// Uses a while loop to simulate drawing cards at random until an ace is found
while (myCard !== "A") {
  myCard = myDeck[Math.floor(Math.random() * myDeck.length)]; // selects random index from array
  i++; // counts how many times it takes
}

// Gives us output after the ace is found
document.querySelector("#while-test-dest").innerText = "It took " + i + " tries to get an Ace";
