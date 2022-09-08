

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

  document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
    e.preventDefault();
    let navSet = document.querySelectorAll('.trulia-nav > nav ul');

    for(let n=0;n<navSet.length;n++){
        navSet[n].classList.toggle('trulia-nav-mobilehide');
    }

});


//Advanced Version
// for (let i = 0; i < truliaCards.length; i++){
//     truliaCards[i].onclick = function(){
//         for (var q = 0; q < truliaCards.length; q++){
//             truliaCards[q].classList.remove('trulia-featured-grid-item');
//         } 
//         this.classList.add('trulia-featured-grid-item');
//     };
// }

// Loop through all the cards
for (var i = 0; i < truliaCards.length; i++){
    
  // Add a click listener on each card
  truliaCards[i].addEventListener('click',function(){
      
      // Remove the featured class
      for (var q = 0; q < truliaCards.length; q++){
          truliaCards[q].classList.remove('trulia-featured-grid-item');
      } 

      // Add the featured class on the one clicked on
      this.classList.add('trulia-featured-grid-item');
  });
}

  });  



