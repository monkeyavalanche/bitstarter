var express = require('express');
var app = express();
app.use(express.logger());

//Test
var fs = require('fs');
var outFile = fs.readFileSync('index.html');
var buffer = new Buffer();

app.get('/', function(request, response) {
  response.send('Hello World2!'+' '+buffer.toString(outFile,'utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
