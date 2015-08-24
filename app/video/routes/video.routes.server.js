'use strict';

module.exports =  function(app, router) {
	var upload  = require('../controllers/video.controller.server.js');
console.log("in video");
	app.route('/upload/:filename').get(upload.read);

	app.route('/upload').post(upload.create);
};