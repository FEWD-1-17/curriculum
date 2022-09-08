function selectPet(petType){
    let thisPetData = petData[petType];

    // Set the title
    document.querySelector(".petDisplayName").innerText = thisPetData.displayName;

    // Empty the specification data
    document.querySelector(".petsDataSpecs").innerHTML="";

    // Add the space required, size, weight, trainability
    let listData = "";

    listData += "<dt>Size</dt><dd>"+thisPetData.size+"</dd>";
    listData += "<dt>Weight</dt><dd>"+thisPetData.weight+"</dd>";
    listData += "<dt>Space Required</dt><dd>"+thisPetData.spaceRequired+"</dd>";

    if(thisPetData.trainability == true){
        listData += "<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'/></dd>";
    }else{
        listData += "<dt>Trainable</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'/></dd>";
    }

    if(thisPetData.fitsOnLap == true){
        listData += "<dt>Fits on a Lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-default.svg.png' alt='Yes'/></dd>";
    }else{
        listData += "<dt>Fits on a Lap</dt><dd><img class='checkmark' src='img/200px-Gnome-emblem-unreadable.svg.png' alt='No'/></dd>";
    }

    // Add the foods
    listData += "<dt>Foods</dt><dd><ul>";
    for(var i=0;i<thisPetData.foods.length;i++){
        listData += "<li>"+thisPetData.foods[i]+"</li>";
    }
    listData += "</ul></dd>";
    document.querySelector(".petsDataSpecs").innerHTML= listData;


    // Update the images

        // Set the main image
        document.querySelector(".photoHaus .photoLarge").setAttribute("src",thisPetData.images[0].img);
        document.querySelector(".photoHaus .photoLarge").setAttribute("alt",thisPetData.images[0].alt);

        // Empty the thumbnails
        document.querySelector(".thumbHaus").innerHTML = "";
    
        // Add the thumbnails
        var thumbnailsHTML = "";
        for(var i=0;i<thisPetData.images.length;i++){

            thumbnailsHTML +=
                "<a href=\""+thisPetData.images[i].img+"\"><img class=\"photoThumb\" src=\""+thisPetData.images[i].thumb+"\" alt=\""+thisPetData.images[i].alt+"\"/></a>";


        }
        document.querySelector(".thumbHaus").innerHTML = thumbnailsHTML;


        // Apply the click event to thumbnails
        let thumbHausChildren = document.querySelectorAll(".thumbHaus > a");

        for(let i=0;i<thumbHausChildren.length;i++){

            thumbHausChildren[i].addEventListener("click",function(e){
                e.preventDefault();
                document.querySelector(".photoHaus .photoLarge").setAttribute("src",this.getAttribute("href")); 
                document.querySelector(".photoHaus .photoLarge").setAttribute("alt",this.querySelector("img").getAttribute("alt"));
            });
        }
       



    // Insert the ideal for
    var idealOwner = "";
    for(var i=0;i<thisPetData.idealOwner.length;i++){
        idealOwner += "<li>"+thisPetData.idealOwner[i]+"</li>";
    }
    document.querySelector(".idealFor").innerHTML = idealOwner;

    // Empty the Adoption Groups

    // Add the adoption groups
    var adoptionGroups = "";
    for(var i=0;i<thisPetData.adoption.length;i++){
        adoptionGroups += "<li><a href=\""+thisPetData.adoption[i].url+"\" target=\"_blank\">"+thisPetData.adoption[i].name+"</a></li>";
    }
    document.querySelector(".adoptionGroups").innerHTML = adoptionGroups;





}// end selectPet


let petData;

document.addEventListener('DOMContentLoaded', function(event) {




    const myRequest = new Request('https://kasigi.github.io/petfinderJSON/data.json');

    fetch(myRequest)
      .then(response => response.json())
      .then(data => {

        petData = data;
            // Initial value
        selectPet( document.querySelector("#petType").value);

        //Update whenever a new value is picked
        document.querySelector("#petType").addEventListener('change',function(){
            var petType = this.value;
            selectPet(petType);
        });

      })
      .catch(console.error);


});

