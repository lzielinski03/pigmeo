'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var mongoStore = require('connect-mongo')({
		session: session
	});
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
		app.use(morgan('dev'));
		app.set('view cache', false);
	} else if (process.env.NODE_ENV === 'production') {
		app.locals.cache = 'memory';
	}

	app.use(bodyParser.urlencoded({extended : true}));
	app.use(bodyParser.json());
	app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
	app.use(express.static(__dirname + '/public'));
	app.use(cookieParser()); // test

	// Express MongoDB session storage
	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret,
		store: new mongoStore({
			db: db.connection.db,
			collection: config.sessionCollection
		})
	}));

	// use passport session
	app.use(passport.initialize());
	app.use(passport.session());

	
	app.use(methodOverride());
	
	return app;
};