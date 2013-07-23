var express = require('express');
var app = express();
var fs = require('fs');
var outfile = fs.readFileSync('./index.html',function(err,data){
  if(err) throw err;
  console.log(data);
});
var buffer = new Buffer(256);

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer(outfile,));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
