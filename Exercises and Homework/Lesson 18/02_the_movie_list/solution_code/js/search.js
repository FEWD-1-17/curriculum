// http://www.omdbapi.com/?i=tt3896198&apikey=1dd13812

let data = null

// Target the results
let results = document.querySelector("#results")

let inputField = document.querySelector("#seachField")


function cardRepeat(title, poster, year, type, element, index){
    let snippet = `<div class="col-md-4 mb-3"><div class="card text-white card-has-bg click-col result-card" id=${index} style="background-image:url('${poster}');">
    <img class="card-img d-none" src="${poster}" alt="${title}">
    <div class="card-img-overlay d-flex flex-column">
    <div class="card-body">
       <small class="card-meta mb-2">${year}</small>
       <h4 class="card-title mt-0 text-white ">${title}</h4>
     </div>
     <div class="card-footer">
      <div class="media">
    
    <h3 class="hiddenClick">Clicked</h3>
    <div class="media-body">
    <small>${type}</small>
    </div>
    </div>
     </div>
    </div>
    </div>
    </div>`
    element.innerHTML+= snippet
}




document.querySelector("#searchMovies").addEventListener("click", async function(e){
    e.preventDefault()
    results.innerHTML="<div></div>"

    // Insert GET function
    const response = await fetch(`http://www.omdbapi.com/?apikey=1dd13812&s=${inputField.value}`)
    data = await response.json();


    for (let i = 0; i < data.Search.length; i++) {
        console.log(data.Search[i])
        cardRepeat(data.Search[i].Title, data.Search[i].Poster, data.Search[i].Year, data.Search[i].Type, results, data.Search[i].imdbID )
    }

    let resultsCard = document.querySelectorAll(".result-card")
    let clickedOn = document.querySelectorAll(".hiddenClick")
    for (let i=0; i < resultsCard.length; i++){
        console.log(resultsCard[i])
        resultsCard[i].addEventListener("click", async function(e){
            console.log(this.id)
            // insert post function 
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: this.id })
            };
            
            const response = await fetch(`https://peaceful-springs-91970.herokuapp.com/api/create`, requestOptions);
            // shows what has been clicked on
            //clickedOn[i].style.display = "block"
        })
    }
})





