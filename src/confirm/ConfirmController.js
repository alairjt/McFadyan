(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name nxApp.register:RegisterController
     * @description
     * # HomeCtrl
     * Controller of the nxApp
     */
    angular.module('nxApp')

    .controller('ConfirmController', ConfirmController);

    ConfirmController.$inject = [];

    function ConfirmController() {
        var vm = this;
        
        vm.data = {};
        
        vm.getProfileImage = function () {
            return vm.data.file ? "data:image/png;base64,".concat(vm.data.file) : 'images/user_placeholder.png';
        };
    }
})();
