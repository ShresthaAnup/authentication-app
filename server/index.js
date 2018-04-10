const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

//DB Setup
//this is for local installation of mongodb
//mongoose.connect('mongodb://localhost:27017/auth');

//this is for mlab which is an online service for mongodb up to 500mb data
mongoose.connect('mongodb://anup:Password321@ds241489.mlab.com:41489/auth');

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);