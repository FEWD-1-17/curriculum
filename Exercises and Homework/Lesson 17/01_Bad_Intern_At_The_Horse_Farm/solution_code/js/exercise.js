document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelectorAll(".breedContainer .toggler").forEach(function(element){
        element.addEventListener("click",function(){
            this.parentElement.classList.toggle("breedContainerLG");
            if(this.getAttribute('src') == "img/240px-Gnome-window-close.svg.png"){
                this.setAttribute('src',"img/48px-Gnome-list-add.svg.png");
            }else{
                this.setAttribute('src',"img/240px-Gnome-window-close.svg.png");
            }
        });
    });

    document.querySelector("#breedType").addEventListener('change',function(){
        var showType = this.value;

        // For each article tag in the class breedsOuterContainer
        document.querySelectorAll(".breedsOuterContainer article").forEach(function(element){

            // Check to see if we are showing all and/or the article has the desired class
            if(element.classList.contains(showType) || showType == "all"){
                // Article has the class
                element.style.display = 'inline-block';
            }else{
                // Article does NOT have the class
                element.style.display = 'none';
            }
        });
    });
});