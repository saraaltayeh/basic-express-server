'use strict';
require('dotenv');
const server = require('./src/server');

let PORT = process.env.PORT || 3000;

server.start(PORT);