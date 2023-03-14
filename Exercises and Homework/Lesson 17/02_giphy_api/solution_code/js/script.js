
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "i9u5FoDahfPMI2LFAipRD3KXJ45afk0f";

async function giphySearch(e) {
  e.preventDefault();
  // get the user input from the form
  const searchTerm = document.querySelector('input[name="search-term"]').value;
  // build the url address for the api with YOUR personal API key and the users search term
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`;
  // make an API call using fetch() and capture the response in a variable
  const response = await fetch(apiUrl);
  // convert the response to a readable json format with .json()
  const giphyData = await response.json();
  // print your data to the console to see its format, dont forget to delete later
  console.log(giphyData);

  // clear out all gifs from previous searches
  document.getElementById("giphy-results").innerHTML = "";

  // the data comes back as an array - use a loop to create and append each image in the array to the dom
  for (let i = 0; i < giphyData.data.length; i++) {
    const imageUrl = giphyData.data[i].images.fixed_width.url;
    const newImageTag = document.createElement("img");
    newImageTag.setAttribute("src", imageUrl);
    document.getElementById("giphy-results").appendChild(newImageTag);
  }
}

// dont forget your event listener
document.querySelector("#search-form").addEventListener("submit", giphySearch);
