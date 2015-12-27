'use strict';

angular.module('eventoLFrontendApp')
    .directive('footer', function() {
        return {
            templateUrl: 'components/footer/footer.html',
            restrict   : 'E',
            link       : function(scope, element) {
                element.addClass('footer');
            }
        };
    });
