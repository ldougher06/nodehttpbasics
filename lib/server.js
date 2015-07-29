var http = require('http');
var https = require('https');

module.exports = function (port) {
  http.createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/starwarsmovies') {
      http.get('http://swapi.co/api/films/')
        .on('response', function (xhr) {
          var body = '';

          xhr
            .on('data', function (chunk) {
              body += chunk;
            })

            .on('end', function () {
              var data = JSON.parse(body);

              data.results.forEach(function (r) {
                res.write(r.title + '\n');
              });

              res.end();
            });
        });
    } else if (req.method === 'GET' && req.url === '/weather') {
      var API_KEY = '5298be317dec00d9c2b2803ca8ce054c';
      var LOCATION = '36.1658,-86.7777';

      res.writeHeader(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });

      https.get('https://api.forecast.io/forecast/' + API_KEY + '/' + LOCATION)
        .on('response', function (xhr) {
          xhr.pipe(res);
          // xhr
          //   .on('data', function (chunk) {
          //     res.write(chunk);
          //   })
          //   .on('end', function () {
          //     res.end();
          //   });
        });
    } else if (req.method === 'GET' && req.url.slice(0,4) === '/cal') {
      res.writeHead(200);
      res.end();
    } else {
      res.writeHead(403);
      res.end('Access Denied!');
    }

  }).listen(port);
}
