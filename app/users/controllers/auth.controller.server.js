'use strict';

var bodyParser = require('body-parser'); //parses information from POST
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.login = function(req, res, next){
	User.find(function(err, users) {
		if (err)
			res.send(err);
		//res.render('users/users', { title: 'All Users', "users" : users });
		res.json(users);
	});
};
exports.signup = function(req, res, next){
	
}