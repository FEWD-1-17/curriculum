const express = require('express')
const app = express()




app.get('/', function (req, res) {
  res.redirect('bottles/99')
})



// Create a path that if the user calls /api/ redirect them to /api/99



// Bottles/NumberofBottles
// Get the number supplied by the path
// Reduce it by one
// Display a link that reduces the bottle by 1
// If there are no bottles left, restart!


// Replicate the bottle endpoint
// Instead of producing text and a regular link, create a json object that looks like this:
// {"bottles":98,"Next":"http://localhost:3001/api/97"}
// Hint: instead of res.send, use res.json




app.listen(3001, function () {
  console.log('app listening on port ' + this.address().port)
})