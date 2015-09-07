(function() {
	'use strict';

	angular.module('userApp')
		.controller('UserController', UserController);

	UserController.$inject = ['userService'];

	function UserController(userService){
		var vm = this;
		vm.message = 'User controller';

		activate();

		function activate() {
			return getVideos().then(function() {
				console.info('Activated Videos View');
			});
		}

		function getUserProfile() {
			return userService.getUserProfile()
				.then(function(data) {
					vm.user.profile = data;
					return vm.user;
				});
		}

		function crearUsuario() {
			alert('Hola');
		}
	}
})();