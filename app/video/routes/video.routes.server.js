'use strict';
var upload  = require('../controllers/video.controller.server');

module.exports =  function(app, router) {

	router.route('/video')
		.post(function (req, res){
			console.log('/video post')
			var x = upload.create(req, res);
			console.log(x);
			res.json(x);
		})
		.get(function (req, res){
			console.log('/video get')
			res.json(upload.read(req, res));
		});
/*
console.log("in video");
	app.route('/upload/:filename').get(upload.read);

	app.route('/upload').post(upload.create);
*/
};