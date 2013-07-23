var express = require('express');
var app = express();

var fs = require('fs');
var readFile = fs.readFileSync('/index.html',function(err,data){
	if(err) throw err;
	return data;
});
var buffer = new Buffer(readFile, "utf-8");

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
