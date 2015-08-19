'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./config.js');
var path = require('path');

module.exports = function(db){
	var app = express();

	// get all model files
	config.getGlobbedFiles('./app/**/models/**/*.js').forEach(function(modelPath) {
		require(path.resolve(modelPath));
	});

	// setting application local variables
	app.locals.title = config.app.title;
	app.locals.description = config.app.description;
	app.locals.jsFiles = config.getJavaScriptAssets();
	app.locals.cssFiles = config.getCSSAssets();

	// Passing the request url to environment locals
	app.use(function (req, res, next) {
		res.locals.url = req.protocol + '://' + req.headers.host + req.url;
		next();
	});

	// Environment dependent middleware
	if (process.env.NODE_ENV === 'development') {

		// Showing stack errors
		app.set('showStackError', true);
		app.use(morgan('dev'));
		app.set('view cache', false);
	} else if (process.env.NODE_ENV === 'production') {
		app.set('showStackError', false);
		//app.use(morgan('dev')); ??
		app.locals.cache = 'memory';
	}

	

	// config app
	app.use(express.static(__dirname + '/public'));
	app.use(morgan(config.env));
	app.use(bodyParser.urlencoded({'extended' : 'true'}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
	app.use(methodOverride());
	
	return app;
};