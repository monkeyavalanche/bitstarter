var express = require('express');
var app = express();
var fs = require('fs');
var outFile = fs.readFileSync('index.html').toString();

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(outFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
