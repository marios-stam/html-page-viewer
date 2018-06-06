var express = require('express')
var app = express()
var fs = require('fs');
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use('/script',express.static('script'));
app.get('/', function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html', null, function(error, data) {
      if (error) {
          response.writeHead(404);
          response.write('File not found!');
      } else {
          response.write(data);
      }
      response.end();
  });
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
