var express = require('express')
var app = express()


app.listen(3001, function () {
  console.log('app listening on port ' + this.address().port)
})

app.get('/', function (req, res) {
  res.redirect('bottles/99')
})
app.get('/api/', function (req, res) {
  res.redirect('/api/99')
})

app.get('/api/:numberOfBottles', function (req, res) {
  var numberOfBottles = req.params.numberOfBottles || 99
  var next = `http://localhost:3001/api/${numberOfBottles - 1}`
  if (numberOfBottles > 1) {
    res.json({'bottles': numberOfBottles, Next: next})
  } else {
    res.json({'bottles': numberOfBottles, Next: `http://localhost:3001/api/99`})
  }
})

app.get('/bottles/:numberOfBottles', function (req, res) {
  var numberOfBottles = req.params.numberOfBottles || 99
  var next = numberOfBottles - 1
  if (numberOfBottles > 1) {
    res.send(`${numberOfBottles} bottles of beer on the wall <a href='/${next}'>Take one down</a> pass it around`)
  } else {
    res.send('1 bottle of beer on the wall <a href="/">Start Over</a>')
  }
})

