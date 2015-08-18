// modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var path = require('path');

var config = require('./config/config.js');
var db = require('./config/db.js');
var configRoutes = require('./app/routes.js');

// config app
app.use(express.static(__dirname + '/public'));
app.use(morgan(config.env));
app.use(bodyParser.urlencoded({'extended' : 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
app.use(methodOverride());