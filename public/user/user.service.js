(function(){
	'use strict';

	angular
		.module('userApp')
		.factory('userService', userService);

	userService.$inject = ['$http'];

	function userService($http) {
		return {
			getUser: getUser
		};

		function getUser() {
			return $http.get('/admin/video')
				.then(getUserComplete)
				.catch(getUserFail);

			function getUserComplete(response) {
				//console.log(response.data);
				return response.data;
			}

			function getUserFail(error) {
				console.error('XHR Failed for getUser.' + error.data);
			}
		}
		function createUser(data) {
			//console.log(data);
			return $http.post('/ad/user', data);
		}
	}

})();