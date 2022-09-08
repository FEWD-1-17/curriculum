var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

document.addEventListener('DOMContentLoaded', function(event) {

  for(i=0;i<cities.length;i++) {
    let newOption = document.createElement('option');
    newOption.value =  cities[i];
    newOption.innerText =  cities[i];
    document.querySelector('#city-type').appendChild(newOption);
  }

  document.querySelector('#city-type').addEventListener('change', function(){
    var city = document.querySelector('#city-type').value;
    if(city == 'NYC') {
      document.body.setAttribute('class','nyc');
    }
    else if (city == 'SF') {
      document.body.setAttribute('class','sf');
    }
    else if (city == 'LA') {
      document.body.setAttribute('class','la');
    }
    else if (city == 'ATX') {
      document.body.setAttribute('class','austin');
    }
    else if (city == 'SYD') {
      document.body.setAttribute('class','sydney');
    }
  });

});