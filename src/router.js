var handler = require('./handler.js');
var functions = require('./functions.js');

  function router (req, res) {
  var endpoint = req.url;
  if (endpoint === '/') {
    handler.handleHome(req, res);
  } else if (endpoint.startsWith('/search')){
    handler.handleSearch(req,res)
} else {
    handler.handlePublic(req,res);
  }
}

module.exports = {
  router:router
}
