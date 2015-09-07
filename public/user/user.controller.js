(function() {
	'use strict';

	angular.module('userApp')
		.controller('UserAuthCtrl', UserAuthCtrl);
		//.controller('UserLoginCtrl', UserLoginCtrl)
		//.controller('UserSignupCtrl', UserSignupCtrl)
		//.controller('UserProfileCtrl', UserProfileCtrl);

	UserAuthCtrl.$inject = ['UserService'];
	//UserLoginCtrl.$inject = ['UserService'];
	//UserSignupCtrl.$inject = ['UserService'];
	//UserProfileCtrl.$inject = ['UserService'];

	function UserAuthCtrl(UserService){
		var vm = this;
		vm.titulo = "User Title";
		vm.message = 'User controller';

		activate();

		function activate() {
			return getUserProfile().then(function() {
				console.info('Activated User Auth View');
			});
		}

		function getUserProfile() {
			return UserService.getUserProfile()
				.then(function(data) {
					vm.users = data;
					return vm.users;
				});
		}

		function crearUsuario() {
			alert('Hola');
		}
	}
})();