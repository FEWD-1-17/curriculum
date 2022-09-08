// 1- Click input button, turn city border red using pure JS getElementByClassName selector
document.getElementsByClassName('js02class')[0].addEventListener('click', function() {
  document.getElementsByClassName('stronghold')[0].classList.toggle('red');
});

// 2- Using a proper function and local variable declarations with getElementByClassName
function petworth( ButtonID, SelectorID ) {
  const petworthButton = document.getElementsByClassName(ButtonID)[0];
  const petworthSelector = document.getElementsByClassName(SelectorID)[0];  
  petworthButton.addEventListener("click", function(){
    petworthSelector.classList.toggle("red");
  });
}
petworth( "js03class" , "petworth" );

// 3- Using querySelector instead of getElementByClassName
function dupont( ButtonID, SelectorID ) {
  const dupontButton = document.querySelector(ButtonID);
  const dupontSelector = document.querySelector(SelectorID);  
  dupontButton.addEventListener("click", function(){
    dupontSelector.classList.toggle("red");
  });
}
dupont( ".js04class" , ".dupont" );