(function() {
	'use strict';

	angular.module('videoApp')
		.controller('VideoController', VideoController);

	VideoController.$inject = ['videoService'];

	function VideoController(videoService){
		var vm = this;
		vm.titulo = '';
		vm.fileVideo = '';
		vm.message = '';
		vm.submitVideo = submitVideo;

		activate();

		function activate() {
			return getVideos().then(function() {
				console.info('Activated Videos controller');
			});
		}

		function getVideos() {
			return videoService.getVideos()
				.then(function(data) {
					vm.videos = data;
					return vm.videos;
				});
		}

		function submitVideo() {
			var video = {
				titulo: vm.titulo,
				video: vm.fileVideo};
			console.log(vm.fileVideo);
			return videoService.postVideo(video)
				.then(function(data) {
					vm.message = data.data.message;
					vm.titulo = '';
				});
		}
	}
})();