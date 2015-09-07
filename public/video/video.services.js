(function(){
	'use strict';

	angular
		.module('videoApp')
		.factory('videoService', videoService);

	videoService.$inject = ['$http'];

	function videoService($http) {
		return {
			getVideos: getVideos,
			postVideo: postVideo
		};

		function getVideos() {
			return $http.get('/admin/video')
				.then(getVideosComplete)
				.catch(getVideosFailed);

			function getVideosComplete(response) {
				return response.data;
			}

			function getVideosFailed(error) {
				console.error('XHR Failed for getVideos.' + error.data);
			}
		}

		function postVideo(data) {
			//console.log(data);
			return $http.post('/admin/video', data);
		}
	}

})();