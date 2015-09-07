angular.module('userService', [])
	.factory('User', function($http) {
		return{
			get : function() {
				return $http.get('/user/');
			},
			find : function(id) {
				return $http.get('/user/' + id);
			},
			create : function(userData) {
				return $http.post('/user/', userData);
			},
			delete : function(id) {
				return $http.delete('/user/' + id);
			},
			update : function(userData) {
				return $http.put('/user/' + userData._id, userData);
			}
		}
	});

$httpProvider.interceptors.push(function($q, $location) {
	return {
		response: function(response) {
			// do something on success 
			return response; 
		}, 
		responseError: function(response) {
			if (response.status === 401)
				$location.url('/login');
			return $q.reject(response);
		}
	};
});
// - See more at: https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs