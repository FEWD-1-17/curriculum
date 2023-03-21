const express = require('express')
const app = express()




app.get('/', function (req, res) {
  res.redirect('bottles/99')
})
app.get('/api/', function (req, res) {
  res.redirect('/api/99')
})

app.get('/api/:numberOfBottles', function (req, res) {
  let numberOfBottles = req.params.numberOfBottles || 99
  let next = `http://localhost:3001/api/${numberOfBottles - 1}`
  if (numberOfBottles > 1) {
    res.json({'bottles': numberOfBottles, Next: next})
  } else {
    res.json({'bottles': numberOfBottles, Next: `http://localhost:3001/api/99`})
  }
})

app.get('/bottles/:numberOfBottles', function (req, res) {
  let numberOfBottles = req.params.numberOfBottles || 99
  let next = numberOfBottles - 1
  if (numberOfBottles > 1) {
    res.send(`${numberOfBottles} bottles of beer on the wall <a href='/bottles/${next}'>Take one down</a> pass it around`)
  } else {
    res.send('1 bottle of beer on the wall <a href="/">Start Over</a>')
  }
})

app.listen(3001, function () {
  console.log('app listening on port ' + this.address().port)
})