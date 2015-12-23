(function () {
    angular.module('app')
            .factory('RegisterData', RegisterData);
    
    function RegisterData() {
        var factory = {};
        
        factory.save = function (data) {
            factory.data = data;
        };

        return factory;
    };
})();