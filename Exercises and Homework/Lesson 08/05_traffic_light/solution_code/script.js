// stopLight turns on the red light, but also turns off the yellow and green
function stopLight(){
  document.getElementById('stopLight').classList.add('red');
  document.getElementById('slowLight').classList.remove('yellow');
  document.getElementById('goLight').classList.remove('green');
}

// slowLight turns on the yellow light, but also turns off the red and green
function slowLight(){
  document.getElementById('stopLight').classList.remove('red');
  document.getElementById('slowLight').classList.add('yellow');
  document.getElementById('goLight').classList.remove('green');
}

// goLight turns on the green light, but also turns off the red and yellow
function goLight(){
  document.getElementById('stopLight').classList.remove('red');
  document.getElementById('slowLight').classList.remove('yellow');
  document.getElementById('goLight').classList.add('green');
}

// Set up event handlers for each button 
document.getElementById('stopButton').addEventListener('click', stopLight);
document.getElementById('slowButton').addEventListener('click', slowLight);
document.getElementById('goButton').addEventListener('click', goLight);