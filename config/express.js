'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./config.js');

module.exports = function(db){
	var app = express();

	// config app
	app.use(express.static(__dirname + '/public'));
	app.use(morgan(config.env));
	app.use(bodyParser.urlencoded({'extended' : 'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
	app.use(methodOverride());
	
	return app;
};