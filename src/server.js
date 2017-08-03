var http = require('http');
var router = require('./router.js');
const fs = require('fs');
const path = require('path');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;


var server = http.createServer(router)
server.listen(port, () => {
    console.log('server running on: http://' + host + ':' + port);
});
