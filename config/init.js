'use strict';

/**
 * Module dependencies.
 */
var glob = require('glob');
var chalk = require('chalk');

/**
 * Module init function.
 */
module.exports = function() {
	/**
	* Set the environment variable
	*/

	glob('./config/env/' + process.env.NODE_ENV + '.js', {
		sync: true
	}, function(err, environmentFiles) {
		if (!environmentFiles.length) {
			if (process.env.NODE_ENV) {
				console.error(chalk.red('No configuration file fouind for "' + process.env.NODE_ENV + '" environment using development instead'));
			} else {
				console.error(chalk.red('NODE_ENV is not defined! Using default development environment'));
			}
			process.env.NODE_ENV = 'development';
		} else {
			console.error(chalk.black.bgWhite('Application loaded using the "' + process.env.NODE_ENV + '" environment configuration'))
		}
	});
	console.log(chalk.blue("Init in " + process.env.NODE_ENV + " mode!"));
};