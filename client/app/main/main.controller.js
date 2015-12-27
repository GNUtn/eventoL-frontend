'use strict';

(function() {

    class MainController {

        constructor($http) {
            this.$http  = $http;
            this.events = [];

            $http.get('/api/events').then(response => {
                this.events = response.data;
            });
        }
    }

    angular.module('eventoLFrontendApp')
        .controller('MainController', MainController);

})();
