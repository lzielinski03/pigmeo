(function() {
	'use strict';

	angular.module('videoApp')
		.controller('VideoController', VideoController);

	VideoController.$inject = ['$scope', '$log'];

	function VideoController($scope, $log){
		var vm = this;
		vm.message = 'hola main o.o';
	}
})();