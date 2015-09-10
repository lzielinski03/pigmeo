(function() {
	'use strict';

	angular.module('userApp')
		.controller('UserAuthCtrl', UserAuthCtrl)
		//.controller('UserLoginCtrl', UserLoginCtrl)
		.controller('UserSignupCtrl', UserSignupCtrl)
		.controller('UserProfileCtrl', UserProfileCtrl);

	UserAuthCtrl.$inject = ['UserService'];
	//UserLoginCtrl.$inject = ['UserService'];
	UserSignupCtrl.$inject = ['UserService'];
	UserProfileCtrl.$inject = ['UserService'];

	function UserAuthCtrl(UserService){
		var vm = this;
		vm.title = '';
		vm.message = '';
		vm.signup = signup;
		
		function signup() {
			var user = {
				email: vm.email,
				password: vm.password
			};
			console.log(vm.email);
			return UserService.signup(user)
				.then(function(data) {
					vm.message = data.data.message;
					vm.titulo = '';
				});
		}
	}
	function UserProfileCtrl(UserService){
		var vm = this;
		vm.getUserProfile = getUserProfile;

/*
		activate();
		function activate() {
			return getUserProfile().then(function() {
				console.info('Activated User Auth View');
			});
		}
*/
		function getUserProfile() {
			return UserService.getUser()
				.then(function(data) {
					vm.users = data;
					return vm.users;
				});
		}

	}
	function UserSignupCtrl(UserService){
		var vm = this;

	}
})();