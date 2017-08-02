var handler = require('./handler.js');
var functions = require('./functions.js');

  function router (req, res) {
  var endpoint = req.url;
  console.log(endpoint);
  if (endpoint === '/') {
    handler.handleHome(req, res);
  } else {
    handler.handlePublic(req,res);
  }
}

module.exports = {
  router:router
}
