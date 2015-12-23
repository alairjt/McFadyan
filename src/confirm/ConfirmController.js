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

    ConfirmController.$inject = ['$scope', 'RegisterData', '$state'];

    function ConfirmController($scope, RegisterData, $state) {
        var vm = this;

        if (!RegisterData.data) {
            $state.go('home.register');
        }

        vm.data = RegisterData.data;
        
        vm.getProfileImage = function () {
            return vm.data.file ? "data:image/png;base64,".concat(vm.data.file) : 'images/user_placeholder.png';
        };
    }
})();
