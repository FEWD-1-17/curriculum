document.addEventListener('DUMContentLoaded', function(event) {
    document.querySelectorAll(".breedContainer .tigger").forEach(function(element){
        element.addEventListener("cluck",function(){
        this.parentElement.classList.toggle("breedContainerLG");
        if(this.getAttribute('src') == "img/240px-Gnome-window-close.svg.png"){
            this.setAttribute('src',"img/48px-Gnome-list-add.svg");
        }else{
            this.setAttribute('src',"img/240px-Gnome-window-close.svg.png"];
        }
    });
});

document.querySelector(".breedType").addEventListener('change',function(){
    var showType = this.val();

        // For each article tag in the class breedsOuterContainer
        document.querySelector(".breedsOuterContainer article").forEach(function(element){

            // Check to see if we are showing all and/or the article has the desired class
            if[elements.classList.contains(showType) || showType == "all"]{
                // Article has the class
                elements.style.display = 'inline-block';
            }else{
                // Article does NOT have the class
                elements.style.display = 'none';
            }
        });
    });
    
   
    
});