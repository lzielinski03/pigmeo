(function() {
	'use strict';

	angular.module('videoApp')
		.controller('VideoController', VideoController);

	//VideoController.$inject = ['$scope', '$log'];

	function VideoController(){
		var vm = this;
		vm.message = 'hola main o.o';
	}
})();