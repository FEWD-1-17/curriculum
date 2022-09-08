//Create variables to store images, increment variable, and a maximum images variable.
var images=["images/animal2.jpg","images/animal3.jpg","images/animal4.jpg","images/animal5.jpg","images/animal6.jpg","images/animal7.jpg"];
var i=0;
var maxImages = images.length-1;

//Function for previous image.
function previousImage(){
	console.log('prev works');
	//If increment var is greater than 0, increment back, else stay at max images, else increment image.
	if(i > 0 ) {
	 	i--;
	}  else  { 
		i = maxImages; 
	}
	changeImage(i);
}

//Function for next image.
function nextImage(){
	console.log('next works');
	//If increment var is less than 0, increment next, else start at 0, else change image.
	if(i < maxImages ) { 
		i++;
	}  else  { 
		i = 0; 
	} 
	changeImage(i);
}

//Function to change the image.
function changeImage(){
	//Update img src to current image.
	jQuery("#carousel-image").attr("src",images[i]);
	//Remove selected attribute.
	//jQuery("#your-vote>option").removeAttr("selected");
}

//Event listeners.
jQuery(document).ready(function(){
	//Next image click.
	jQuery("#buttons-wrapper #next").on("click",nextImage);
	//Previous image click.
	jQuery("#buttons-wrapper #back").on("click",previousImage);
});