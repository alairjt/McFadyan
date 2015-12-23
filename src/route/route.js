(function () {
    'use strict';

    angular.module('nxApp')

    .config(Route);

    Route.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Route($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'home/home.tpl.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    },
                    'name@': {
                        template: 'Dashboard'
                    }
                }
            })
            .state('home.register', {
                url: 'register',
                views: {
                    'content@': {
                        templateUrl: 'register/register.tpl.html',
                        controller: 'RegisterController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('home.confirm', {
                url: 'confirm',
                views: {
                    'content@': {
                        templateUrl: 'confirm/confirm.tpl.html',
                        controller: 'ConfirmController',
                        controllerAs: 'vm'
                    }
                }
            })
            ;
    }
})();
