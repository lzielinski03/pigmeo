'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var helmet = require('helmet');
var passport = require('passport');
var mongoStore = require('connect-mongo')({
		session: session
	});
var busboyBodyParser = require('busboy-body-parser');
var flash = require('connect-flash');
var config = require('./config.js');
var path = require('path');


module.exports = function(db){
	var app = express();

	// get all model files
	config.getGlobbedFiles('./app/**/models/*.js').forEach(function(modelPath) {
		require(path.resolve(modelPath));
		console.log(modelPath);
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
	app.use(cookieParser()); // test

	app.use(busboyBodyParser()); // test for video upload

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

	// connect flash for flash messages
    app.use(flash());

     // Use helmet to secure Express headers
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    app.use(helmet.ienoopen());
    app.disable('x-powered-by');

    app.use(express.static(__dirname + '/public'));

    // get all routes files
    var router = express.Router();
	config.getGlobbedFiles('./app/**/routes/*.js').forEach(function(modelPath) {
		require(path.resolve(modelPath))(app, router);
		console.log(modelPath);
	});

	app.use('/admin', router);
	
	app.use(methodOverride());
	
	return app;
};