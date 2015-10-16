(function() {
'use strict';

	angular
		.module('app.layout')
		.controller('ShellController', ShellController);

	// ShellController.$inject = ['$scope'];
	function ShellController() {
		var vm = this;
		vm.title = 'Shell';

		activate();

		////////////////

		function activate() { }
	}
})();