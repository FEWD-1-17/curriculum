//custom api
//https://peaceful-springs-91970.herokuapp.com/api/
let data = null
let results = document.querySelector("#results")
console.log(results)

function cardRepeat(info, element){
    let snippet = `<div class="col-md-4 mb-3"><div class="card text-white card-has-bg click-col result-card" id=${info.imdbID} style="background-image:url('${info.Poster}');">
    <img class="card-img d-none" src="${info.Poster}" alt="${info.Title}">
    <div class="card-img-overlay d-flex flex-column">
    <div class="card-body">
       <small class="card-meta mb-2">${info.Year}</small>
       <h4 class="card-title mt-0 text-white ">${info.Title}</h4>

       <small class="card-meta">Runtime: ${info.Runtime}</small>
     </div>
     <div class="card-footer">
      <div class="media">
    
    <div class="media-body">

    <p>Actors: ${info.Actors}</p>
    <small>${info.Type}</small>
    </div>
    </div>
     </div>
    </div>
    </div>
    </div>`
    element.innerHTML+= snippet
}


document.addEventListener('DOMContentLoaded',async function(e) {


    e.preventDefault()
    results.innerHTML="<div></div>"

    // Insert GET function
    const response = await fetch(`https://peaceful-springs-91970.herokuapp.com/api/`)
    data = await response.json();
console.log(data);
    for (let i = data.length - 1; i >= 0; i--) {
        console.log(data[i])
        cardRepeat(data[i], results )
    }

})