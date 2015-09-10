'use strict';

var bodyParser = require('body-parser'); //parses information from POST
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.list = function(req, res, next){
	User.find(function(err, users) {
		if (err)
			res.send(err);
		//res.render('users/users', { title: 'All Users', "users" : users });
		res.json(users);
	});
};

exports.create = function(req, res){
	var user = new User(req.body);

	user.save(function(err) {
		if (err)
			res.send(err);
		var response = {
			message: "User created"
		};
		res.json(response);
	});
};

exports.read = function(req, res){
	User.findOne({ _id: req.params.id }, function(err, user) {
		if (err)
			res.send(err);
		res.render(user);
	});
};

exports.update = function(req, res){
	User.findOne({ _id: req.params.id }, function(err, user) {
		if (err)
			res.send(err);

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
		    password: password,
		    //token: token,
		    /*
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
		    state: state*/
		}, function(err, userID){
			if(err)
				res.send(err);
			var response = {
				message: "User Updated"
			};
			res.json(response);
		});
	});
};

exports.delete = function(req, res, next){
	User.remove({ _id: req.params.id }, function(err, user) {
		if (err)
			res.send(err);
		var response = {
			message: "User Deleted"
		};
		res.json(response);
	});
};