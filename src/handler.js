var fs = require('fs');
var path = require ('path');

 function serveHome(req, res){
  readFile(res, '/index.html');
};

function readFile(res, endpoint) {
  fs.readFile(path.join(__dirname, '..', 'public', endpoint), function(err, file) {
    if (err) {
      console.log(err);
      notFound(null, res);
    } else {
      var extension = endpoint.split('.')[1];
      var extensionType = {
        "html": "text/html",
        "css": "text/css",
        "js": "application/javascript",
        "ico": "image/x-icon",
        "woff": "application/x-font-woff",
        "svg": "image/svg+xml",
        "woff2": "application/x-font-woff2"
      }
      res.writeHead(200, { "Content-Type": extensionType[extension]});
      res.end(file);
    }
  })
}

 function servePublic(req, res) {
  var endpoint = req.url;
  readFile(res, endpoint)
};

 function notFound(req, res){
  res.writeHead(404,{'Content-Type': 'text/html'});
  res.write('<h1>404 Page Requested Cannot Be Found<h1>');
  res.end();
};

module.exports = {
serveHome : serveHome,
readFile : readFile,
servePublic : servePublic,
notFound : notFound,
};
