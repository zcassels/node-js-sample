var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  console.log("Request Inbound -> " + request.connection.remoteAddress + " (" + request.connection.remotePort + ")");
  response.send(JSON.stringify({"ip": request.connection.remoteAddress, "port": request.connection.remotePort}));
})

app.post('/', function(request, response) {
  console.log("Request Inbound -> " + request.connection.remoteAddress + " (" + request.connection.remotePort + ")");
  response.send(JSON.stringify({"ip": request.connection.remoteAddress, "port": request.connection.remotePort}));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});