module.exports =  function(app, router) {
	if (app.get('env') == 'development')
		console.log('Load: ' + require('path').basename(__filename));
};