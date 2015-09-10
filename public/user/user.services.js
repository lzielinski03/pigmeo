(function(){
	'use strict';

	angular
		.module('userApp')
		.factory('UserService', UserService);

	UserService.$inject = ['$http'];

	function UserService($http) {
		return {
			getUser: getUser,
			signup: signup
		};

		function getUser() {
			return $http.get('/admin_user/user')
				.then(getUserComplete)
				.catch(getUserFail);

			function getUserComplete(response) {
				//console.log(response.data);
				return response.data;
			}

			function getUserFail(error) {
				console.error('XHR Failed for getUser.' + error.data);
			}
		};
		function signup(data) {
			//console.log(data);
			return $http.post('/admin_user/user', data);
		};
	}

})();