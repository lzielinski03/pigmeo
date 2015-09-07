(function() {
	'use strict';

	angular.module('userApp')
		.config(configRoutes);

	configRoutes.$inject = ['$routeProvider'];

	function configRoutes($routeProvider) {
		$routeProvider
			.when('/auth', {
				templateUrl : 'view/auth.html',
				controller  : 'UserAuthCtrl',
				controllerAs: 'vm'
			})
			.when('/login', {
				templateUrl : 'view/login.html',
				controller  : 'UserLoginCtrl',
				controllerAs: 'vm'
			})
			.when('/signup', {
				templateUrl : 'view/signup.html',
				controller  : 'UserSignupCtrl',
				controllerAs: 'vm'
			})
			.when('/profile', {
				templateUrl : 'view/profile.html',
				controller  : 'UserProfileCtrl',
				controllerAs: 'vm'
			});
	}
})();