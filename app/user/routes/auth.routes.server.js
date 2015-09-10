'use strict';


module.exports = function(app, router, passport){

	// GET login page.
	router.get('/account', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('login', { message: req.flash('message') });
	});

	// GET Registration Page
	router.get('/signup', function(req, res){
		res.json(req.user);
	});

	// GET Home Page
	router.get('/home', isAuthenticated, function(req, res){
		res.json(req.user);
	});

	// Handle Login POST 
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	// Handle Registration POST 
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: 'profile',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	// Handle Logout 
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	app.use('/admin_auth', router);
}
var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.json("hola");
	//res.status(500).end();
}
/*
var needsGroup = function(group){
  return function(req, res, next){
    if (req.user && req.user.group === group)
      return next();
    else
    	res.render('error', { message: "Unauthorized User" });
  };
*/