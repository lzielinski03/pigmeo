'use strict';

// modules
var init = require('./config/init')();
var config = require('./config/config.js');
var mongoose = require('mongoose');
var chalk = require('chalk');

// connect to mongo
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

// init express application
var app = require('./config/express')(db);







//var configRoutes = require('./app/routes.js');
var routes = require('./app/routes.js');






//app.set('env', 'production');
//console.log('Environment: ' + app.get('env'));

// routes
//routes(app);
//var router = express.Router();

app.listen(config.port);