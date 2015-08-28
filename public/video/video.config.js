(function() {
	'use strict';

	angular.module('videoApp')
		.config(configRoutes);

	configRoutes.$inject = ['$routeProvider'];

	function configRoutes($routeProvider) {
		$routeProvider
			.when('/video', {
				templateUrl : 'view/video.html',
				controller  : 'VideoController',
				controllerAs: 'vm'
			});
	}
})();