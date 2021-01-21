const http = require('http');
const app = require('./App');

const config = require('./config/default');

const port = process.env.PORT || config.port;

const server = http.createServer(app);

server.listen(port);
console.log('Server is running on:127.0.0.1:'+port);