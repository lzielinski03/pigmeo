'use strict';

// modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

var config = require('./config/config.js');
//var configRoutes = require('./app/routes.js');
var routes = require('./app/routes.js');

// connect to mongo
mongoose.connect(config.db);

// config app
app.use(express.static(__dirname + '/public'));
app.use(morgan(config.env));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
app.use(methodOverride());


//app.set('env', 'production');
console.log('Environment: ' + app.get('env'));

// routes
routes(app);
//var router = express.Router();

app.listen(config.port);