// MODULE INCLUDES
var express = require('express'),
    http = require('http'),
    path = require('path');

var config = {
  clientVersion: 'client',
  port: 8080
};

var app = express(),
    server = http.createServer(app).listen(config.port);

app.use(express.static(path.join(__dirname, '../' + config.clientVersion)));

app.get('/',function(req, res){//get,put,post,delete
      res.sendFile('index.html');
});