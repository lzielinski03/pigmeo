'use strict';
var upload  = require('../controllers/video.controller.server.js');

module.exports =  function(app, router) {

	router.route('/video')
		.post(upload.create
			/*
			function (req, res){
			console.log('post /video')
			var x = upload.create(req, res);
			console.log(x);
			res.json(x);
			*/
		)
		.get(upload.list
			/*
			function (req, res){
				console.log('get /video')
				res.json(upload.read(req, res));
			}*/
		);
/*
	router.route('/video/:video_id')
		.get(function(req, res) {
			console.log('get /video/:video_id')
		});
*/
	app.get('/video', function(req, res) {
		res.sendfile('./public/video/view/index.html');
	});
/*
console.log("in video");
	app.route('/upload/:filename').get(upload.read);

	app.route('/upload').post(upload.create);
*/
};