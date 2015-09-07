(function() {
	'use strict';

	angular.module('userApp')
		.config(configRoutes);

	configRoutes.$inject = ['$routeProvider'];

	function configRoutes($routeProvider) {
		$routeProvider
			.when('/auth', {
				templateUrl : 'view/auth.html',
				controller  : 'UserController',
				controllerAs: 'vm'
			})
			.when('/login', {
				templateUrl : 'view/login.html',
				controller  : 'UserController',
				controllerAs: 'vm'
			})
			.when('/signup', {
				templateUrl : 'view/signup.html',
				controller  : 'UserController',
				controllerAs: 'vm'
			})
			.when('/profile', {
				templateUrl : 'view/profile.html',
				controller  : 'UserController',
				controllerAs: 'vm'
			});
	}
})();