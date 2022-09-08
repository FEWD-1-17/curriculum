// 1- Click input button, turn city border red using pure JS getElementById selector
document.getElementById("js02ID").addEventListener("click", function() {
  document.getElementById("anacostia").classList.toggle("red");
});  

// 2- Using a proper function and local variable declarations with getElementById
function foggybottom ( ButtonID, SelectorID ) {
  const foggybottomButton = document.getElementById(ButtonID);
  const foggybottomSelector = document.getElementById(SelectorID);  
  foggybottomButton.addEventListener("click", function(){
    foggybottomSelector.classList.toggle("red");
  });
}
foggybottom( "js03ID" , "foggybottom" );

// 3- Using querySelector instead of getElementById
function mountvernon ( ButtonID, SelectorID ) {
  const mountvernonButton = document.querySelector(ButtonID);
  const mountvernonSelector = document.querySelector(SelectorID);  
  mountvernonButton.addEventListener("click", function(){
    mountvernonSelector.classList.toggle("red");
  });
}
mountvernon( "#js04ID" , "#mountvernon" );