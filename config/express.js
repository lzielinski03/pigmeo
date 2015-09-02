'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var compress = require('compression');
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
	});

	// setting application local variables
	app.locals.title = config.app.title;
	app.locals.description = config.app.description;
	app.locals.jsFiles = config.getJavaScriptAssets();
	app.locals.cssFiles = config.getCSSAssets();

	// Passing the request url to environment locals
	app.use(function (req, res, next) {
		console.log(req.url);
		res.locals.url = req.protocol + '://' + req.headers.host + req.url;
		next();
	});

	// Should be placed before express.static
	app.use(compress({
		filter: function(req, res) {
			return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
		},
		level: 9
	}));


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
	app.use(methodOverride());
	//app.use(bodyParser.json({ type : 'application/vnd.api+json'}));
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

    app.use(express.static(path.resolve('./public')));
    var routes = require('../app/routes.js')(app);
   

    // get all routes files
    /*
    var router = express.Router();
	config.getGlobbedFiles('./app/** /routes/*.js').forEach(function(modelPath) {
		require(path.resolve(modelPath))(app, router);
		console.log(modelPath);
	});

	app.use('/admin', router);
	*/
	
	//var routes = require('../app/routes.js')(app);
	//app.use(routes);

	//app.use(methodOverride());
	
	return app;
};