(function() {
	'use strict';

	angular.module('videoApp')
		.config(configRoutes);

	configRoutes.$inject = ['$routeProvider'];

	function configRoutes($routeProvider) {
		$routeProvider
			.when('/videos', {
				templateUrl : 'view/video.html',
				controller  : 'VideoController',
				controllerAs: 'vm'
			})
			.when('/upload', {
				templateUrl : 'view/upload.html',
				controller  : 'VideoController',
				controllerAs: 'vm'
			});
	}
})();