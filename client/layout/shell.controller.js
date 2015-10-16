(function() {
'use strict';

	angular
		.module('app.layout')
		.controller('ShellController', ShellController);

	ShellController.$inject = ['$mdSidenav'];
	function ShellController($mdSidenav) {
		var vm = this;
		vm.title = 'Shell';

        vm.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        }

		activate();

		////////////////

		function activate() { }
	}
})();