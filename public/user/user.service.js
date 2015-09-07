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
				.then(getVideosComplete)
				.catch(getVideosFailed);

			function getVideosComplete(response) {
				//console.log(response.data);
				return response.data;
			}

			function getVideosFailed(error) {
				console.error('XHR Failed for getUser.' + error.data);
			}
		}
	}

})();