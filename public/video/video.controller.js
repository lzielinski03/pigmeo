(function() {
	'use strict';

	angular.module('videoApp')
		.controller('VideoController', VideoController);

	VideoController.$inject = ['videoService'];

	function VideoController(videoService){
		var vm = this;
		//vm.titulo = '';
		console.log(vm.video);
		activate();

		function activate() {
			return getVideos().then(function() {
				console.info('Activated Videos View');
			});
		}

		function getVideos() {
			return videoService.getVideos()
				.then(function(data) {
					vm.videos = data;
					return vm.videos;
				});
		}
	}
})();