var express = require('express'),
    reload = require('reload'),
    http = require('http'),
    app = express(),
    HOSTNAME = 'localhost',
    PORT = 8001;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

var server = http.createServer(app);
reload(server, app, 300, true);

server.listen(PORT, HOSTNAME, function () {
    console.log('Express server listening on port ' + PORT);
 });
