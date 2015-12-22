(function () {
    'use strict';

    angular.module('nxApp')

    .config(Route);

    Route.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Route($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            views: {
                'content@': {
                    templateUrl: 'home/home.tpl.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                },
                'name@': {
                    template: 'Dashboard'
                }
            },
            data: {
                displayMenu: true,
                displayName: 'Dashboard',
                operacoes: []
            }
        });
    }
})();
