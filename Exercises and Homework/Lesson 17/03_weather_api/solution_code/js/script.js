const myApiKey = "870b1b10b58578f725b70b13aff6c357"; 
// Icon URL https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code

async function handleWeatherRequest(e) {
  e.preventDefault();
  // get user input value from textbox
  const city = document.querySelector('input[name="city"]').value;
  // build the url address for the api with YOUR personal API key and the users search term
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myApiKey}`;
  // make an API call using fetch() and capture the response in a variable
  const response = await fetch(apiUrl);
  // convert the response to a readable json format with .json()
  const data = await response.json();
  // print your data to the console to see its format, dont forget to delete later
  console.log(data);

  // Write a function to convert the temps from the default units (Kelvin) to a more readable F or C
  const readableTemp = convertTemp(data.main.temp);
  const readableFeelsLikeTemp = convertTemp(data.main.feels_like);;
  const readableMaxTemp = convertTemp(data.main.temp_max);
  const readableMinTemp = convertTemp(data.main.temp_min);

  // display the results to the DOM 
  const weatherResults = `<li>The temperature in ${city} is currently ${readableTemp}&#176 </li>
                          <li>Feels Like: ${readableFeelsLikeTemp}&#176 </li>
                          <li>Humidity: ${data.main.humidity} </li>
                          <li>Pressure: ${data.main.pressure} </li>
                          <li>High: ${readableMaxTemp}&#176 </li>
                          <li>Low: ${readableMinTemp}&#176 </li>`;
  
  const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  // create icon img tag
  const newWeatherIconTag = document.createElement("img");
  // add icon url as src 
  newWeatherIconTag.setAttribute("src", iconSrc);
  // clear out previous icon img
  document.querySelector("#weather-icon").innerHTML = ""
  // print results to dom
  document.querySelector("#weather-results").innerHTML = weatherResults;
  // append icon img to dom
  document.querySelector("#weather-icon").appendChild(newWeatherIconTag);
}

// Attach an event listener to the submit button
document.querySelector("#weather-search").addEventListener("submit", handleWeatherRequest);


// Write a function to convert the temp from Kelvin to F or C
const convertTemp = function(tempInKelvin) {
  let convertedTemp = ((tempInKelvin - 273.15) * 9) / 5 + 32; // this gives us temp in F (look up the formula online)
  convertedTemp = Math.round(convertedTemp); // UI looks cleaner without decimal places
  return convertedTemp;
}
