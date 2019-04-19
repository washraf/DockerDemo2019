var express = require('express');
// Constants
var PORT = 8080;
// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello Docker Geeks V1.4 :D \n');
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);


