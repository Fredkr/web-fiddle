var express = require('express'),
    app = express(),
    HOSTNAME = 'localhost',
    PORT = 8001;

app.use(express.static('public'));
app.listen(PORT, HOSTNAME, function () {
    console.log('Express server listening on port ' + PORT);
 });

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});
