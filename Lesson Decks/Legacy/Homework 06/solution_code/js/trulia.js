

var truliaCards = document.getElementsByClassName("trulia-grid-item");

// for (var i = 0; i < truliaCards.length; i++){
//     console.log(truliaCards[i]);
//     truliaCards[i].onclick = function(){

//         for (var q = 0; q < truliaCards.length; q++){
//             truliaCards[q].classList.remove('trulia-featured-grid-item');
//         } 

//         this.classList.add('trulia-featured-grid-item');
//     };
// }


//Advanced Version
for (let i = 0; i < truliaCards.length; i++){
    truliaCards[i].onclick = function(){
        for (var q = 0; q < truliaCards.length; q++){
            truliaCards[q].classList.remove('trulia-featured-grid-item');
        } 
        this.classList.add('trulia-featured-grid-item');
    };
}



