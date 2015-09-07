'use strict';

/**
 * Module dependencies.
 */
var login = require('./passport/login');
var signup = require('./passport/signup');
var mongoose = require('mongoose');
var User = mongoose.model('User');
	
/**
 * Module init function.
 */
module.exports = function(passport) {
	// Serialize sessions
	passport.serializeUser(function(user, done){
		console.log('serialize user: ');
		console.log(user);
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done){
	  User.findById(id, function(err, user){
	  	console.log('deserialize user: ', user);
	    done(err, user);
	  });
	});

	login(passport);
	signup(passport);
};