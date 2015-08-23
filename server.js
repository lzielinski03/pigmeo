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

// Bootstrap passport config
//require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log(chalk.bgGreen('Pigmeo application started on port ' + config.port));