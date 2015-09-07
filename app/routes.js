'use strict';

var path = require('path');
var configRoutes = require('../pigmeo_modules/globbedFiles.js');
var router = require('express').Router();
var modules = require('../config/modules.js');

module.exports = function(app, passport) {
	configRoutes.getGlobbedFiles('./app/**/routes/*.routes.server.js').forEach(function(routePath) {
		console.log('loading route: ' + routePath);
		require(path.resolve(routePath))(app, router, passport);
	});
/*
	modules.forEach(function (module) {
		//var test = '/' + index;
		//console.log(module);

		app.get('/' + module, function (req, res, next, err) {
			if (err){
				res.json(err);
				next();
			}


			//res.sendfile('./public/' + module + '/view/' + module + '.html');
		});
		//console.log('Module load: ' + module);
	});
*/
	//app.use('/admin', router);
	
	app.get('*', function(req, res) {
	    res.sendfile('./public/commons/view/template/404.html');
	});
};