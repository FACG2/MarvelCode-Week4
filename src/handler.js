var fs = require('fs');
var path = require('path');
var functions = require('./functions.js');
var qs = require('querystring');
var extensionType = {
  "html": "text/html",
  "css": "text/css",
  "js": "application/javascript",
  "ico": "image/x-icon",
  "woff": "application/x-font-woff",
  "svg": "image/svg+xml",
  "woff2": "application/x-font-woff2"
}

function handlePublic(req, res) {
  var endpoint = req.url;
  fs.readFile(path.join(__dirname, '..', 'public', endpoint), function(err, file) {
    if (err) {
      notFound(req, res);
    } else {
      var extension = endpoint.split('.')[1];
      res.writeHead(200, {
        "Content-Type": extensionType[extension]
      });
      res.end(file);
    }
  })
}

function handleSearch(req, res) {
  var endpoint = req.url;
  var string = endpoint.split('?')[1];
  var query = qs.parse(string);
  res.writeHead(200, {
    "Content-Type": "application/javascript"
  });
  var suggestions = "";
  if (typeof query.gender === 'undefined' || typeof query.align === 'undefined' ||
    typeof query.text === 'undefined') {
    notFound(req, res);
  } else if (query.gender === 'both' && query.align === 'both') {
    suggestions = functions.getTenNames(query.text);
  } else suggestions = functions.filterBySexAndAlign(query.text, query.align, query.gender);
  res.end(suggestions.toString());
}

function notFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>404 Page Requested Cannot Be Found<h1>');
  res.end();
};
module.exports = {
  handlePublic: handlePublic,
  handleSearch: handleSearch,
  notFound: notFound,
};
