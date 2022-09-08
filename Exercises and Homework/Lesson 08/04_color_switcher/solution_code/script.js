function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}
const grayButton = document.querySelector('#grayButton');
const whiteButton = document.querySelector("#whiteButton");

grayButton.addEventListener("click", switchGray);
whiteButton.addEventListener("click", switchWhite);