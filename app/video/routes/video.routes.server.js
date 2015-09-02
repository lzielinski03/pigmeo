'use strict';

module.exports =  function(app, router) {

	var video  = require('../controllers/video.controller.server.js');


	router.route('/video')
		.get(video.list)
		.post(video.create);

	router.route('/video/:videoId')
		.get(video.read)
		.put(video.update)
		.delete(video.delete);

	app.get('/video', function(req, res) {
		res.sendfile('./public/video/view/index.html');
	});

	app.use('/admin', router);
/*
console.log("in video");
	app.route('/upload/:filename').get(upload.read);

	app.route('/upload').post(upload.create);
*/
};