

 document.querySelector('#submit').onclick = function(e) {
   e.preventDefault();
    let comparison;
    let a = Number(document.querySelector('#a').value);
    let b = Number(document.querySelector('#b').value);

    if (a < b) {
      comparison = '<';
    } else if (a > b) {
      comparison = '>';
    } else if (a === b) {
      comparison = '==';
    } else{
      comparison = 'N/A';
    }

    document.querySelector('#comparison').innerText = comparison;
  };


