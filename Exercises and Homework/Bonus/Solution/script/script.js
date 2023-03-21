let jokes = ["What's a ninja's favorite type of shoes? Sneakers!", "Why don't sharks eat clowns?  Because they taste funny.", "What's the best thing about elevator jokes? They work on so many levels.", "Doctor you've got you help me, I'm addicted to twitter. Doctor: I don't follow you.", "Why was ten scared of seven? Because seven ate nine.", "What do you call a pile of cats?  A Meowtain.", "What is this movie about? It is about 2 hours long.","I couldn't get a reservation at the library. They were completely booked.", "Where do young cows eat lunch? In the calf-ateria.","Why did the worker get fired from the orange juice factory? Lack of concentration.", "Where do bees go to the bathroom?  The BP station.", "I think circles are pointless.", "I used to work for an origami company but they folded.", "What did one wall say to the other wall? I'll meet you at the corner!", "Why do ducks make great detectives? They always quack the case.","The great thing about stationery shops is they're always in the same place..."]

function dadJokes(){
    document.querySelector("h1").innerText = jokes[Math.floor(Math.random() * jokes.length )]
}

dadJokes()


let moreJokesButton = document.querySelector("#moreJokes")

moreJokesButton.addEventListener("click", function(){
    dadJokes()
})