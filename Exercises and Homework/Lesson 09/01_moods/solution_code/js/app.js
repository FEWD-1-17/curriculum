//wait for the DOM elements to load before executing
document.addEventListener('DOMContentLoaded', function(event) {

  //prevent the submit button from refreshing the page
  document.querySelector('#submit-btn').addEventListener('click',function(e){
    e.preventDefault();
    //get the value of the #mood input and correct for capitalization
    var myMood = document.querySelector('#mood').value;
    document.querySelector('#mood').value = '';
    myMood = myMood.toLowerCase().trim();

    // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
    if(myMood == 'excited' || myMood == 'ecstatic' || myMood == 'fantastic') {
      document.querySelector('.moodring > div').setAttribute('class','excited');
    }

    // if the user inputs happy/good/great change the CSS class to 'happy'
    else if (myMood == 'happy' || myMood == 'good' || myMood == 'great') {
      document.querySelector('.moodring > div').setAttribute('class','happy');
    }

    // if the user inputs bad/angry change the CSS class to 'bad'
    else if (myMood == 'bad' || myMood == 'angry') {
      document.querySelector('.moodring > div').setAttribute('class','bad');
    }
  });
});