(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.register:RegisterController
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('app')

    .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$scope', '$base64', '$state', 'RegisterData'];

    function RegisterController($scope, $base64, $state, RegisterData) {
        var vm = this;
        
        vm.data = RegisterData.data || {};
        
        vm.getProfileImage = function () {
            return vm.data.file ? "data:image/png;base64,".concat(vm.data.file) : 'images/user_placeholder.png';
        };
        
        vm.checkAge = function (age) {
            return vm.data.age >= age;
        };
        
        vm.setAge = function (age) {
            return vm.data.age = age;
        };
        
        vm.submit = function (data) {
            RegisterData.save(data);
            $state.go('home.confirm');
        };

        $scope.fileChanged = function(element) {
            if (element.files[0]) {
                var image = element.files[0];
                var reader = new FileReader();
                reader.onload = function(e) {
                    vm.data.file_name = image.name;
                    vm.data.file = $base64.encode(e.target.result);
                    $scope.$apply();
                };
                reader.readAsBinaryString(image);
            }
        };
    }
})();
