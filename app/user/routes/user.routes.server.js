'use strict';

module.exports = function(app, router) {

	var user = require('../controllers/user.controller.server.js');

	router.route('/user')
		.get(user.list)
		.post(user.create);
		
	router.route('/user/:id')
		.get(user.read)
		.put(user.update)
		.delete(user.delete);

	app.use('/admin_user', router);
};

/*
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var bodyParser = require('body-parser'); //parses information from POST
var User = mongoose.model('User');

module.exports = function(app, router) {

// Getting all users and post new user
router.route('/users')
	.get(function(req, res, next) {
		User.find(function(err, users) {
			if (err)
				return res.send(err);
			res.render('users/users', { title: 'All Users', "users" : users });
		});
	})
	.post(function(req, res) {
		var user = new User(req.body);

		user.save(function(err) {
			if (err)
				return res.send(err);
			res.send({ message: 'User Added' });
		});
});

// Router Show one - Edit - Delete
router.route('/users/:id')
.put(function(req,res){
	User.findOne({ _id: req.params.id }, function(err, user) {
		if (err)
			return res.send(err);

		var username = req.body.username;
		var group = req.body.group;
		var role = req.body.role;
		var firstname = req.body.firstname;
		var lastname = req.body.lastname;
		var phone = req.body.phone;
		var email = req.body.email;
		var photo = req.body.photo;
		var country = req.body.country;
		var lstate= req.body.lstate;
		var city = req.body.city;
		var zipcode = req.body.zipcode;
		var address = req.body.address;
		var number = req.body.number;
		var state = req.body.state;
		var created = req.body.created;
		var server = req.body.server;
		var domain = req.body.domain;
		var site = req.body.site;
		var service = req.body.service;


		user.update({
			username: username,
		    //password: password,
		    //token: token,
		    group: group,
		    role: role,
		    profile: {
		    	name: {
		    		first: firstname,
		    		last: lastname
		    	},
		    	phone: phone,
		        email: email,
		        photo: photo,
		        location: {
		            country: country,
		            state: lstate,
		            city: city,
		            zipCode: zipcode,
		            address: address,
		            number: number
		        }
		    },
		    server: server,
		    domain: domain,
		    site: site,
		    service: service,
		    // put an actualized state
		    state: state
		}, function(err, userID){
			if(err)
				return res.send(err);
			res.render('users/home');
		});
	});
}).get(function(req, res) {
	User.findOne({ _id: req.params.id }, function(err, user) {
		if (err)
			return res.send(err);
		res.render('users/show', {"user": user});
	});
}).delete(function(req, res, next) {
	User.remove({ _id: req.params.id }, function(err, user) {
		if (err)
			return res.send(err);
		res.json({ message: 'Successfully deleted' });
	});
});

// Updateing a user
router.route('/users/:id/edit').get(function(req,res){
	User.findOne({ _id: req.params.id }, function(err, user) {
		if (err)
			return res.send(err);
		res.render('users/edit', {"user" : user});
	});
});

module.exports = router;

};
*/