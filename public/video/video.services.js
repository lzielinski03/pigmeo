(function(){
	'use strict';

	angular
		.module('videoApp')
		.factory('videoService', videoService);

	videoService.$inject = ['$http'];

	function videoService($http) {
		return {
			getVideos: getVideos
		};

		function getVideos() {
			return $http.get('/admin/video')
				.then(getVideosComplete)
				.catch(getVideosFailed);

			function getVideosComplete(response) {
				//console.log(response.data);
				return response.data;
			}

			function getVideosFailed(error) {
				console.error('XHR Failed for getVideos.' + error.data);
			}
		}
	}

})();