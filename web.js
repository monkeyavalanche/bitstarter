var express = require('express');
var fs = require('fs');
var app = express();
var outfile = fs.readFileSync('/index.html');
var buffer = new Buffer(256);
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString(outfile,'utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
