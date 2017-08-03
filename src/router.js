var handler = require('./handler.js');
var functions = require('./functions.js');

function router(req, res) {
  var endpoint = req.url;
  if (endpoint === '/') {
    handler.handlePublic(req, res);
  } else if (endpoint.startsWith('/search')) {
    handler.handleSearch(req, res)
  } else {
    handler.notFound(req, res);
  }
}
module.exports = router;
