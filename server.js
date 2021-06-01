#!/usr/bin/env node

/**
 * Module dependencies.
 */

let app = require('./app');
let debug = require('debug');
let http = require('http');

const port = 3000;
app.set('port', port);


const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
