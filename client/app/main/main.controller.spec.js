'use strict';

describe('Controller: MainController', function() {

    // load the controller's module
    beforeEach(module('eventoLFrontendApp'));

    var scope;
    var MainController;
    var $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/events')
            .respond([
                {
                    name             : "FLISoL CABA 2016",
                    date             : "2016-04-25T10:00Z",
                    external_url     : null,
                    home_image       : "http://demasiadoalup.com.ar/wp-content/uploads/flisol.png",
                    short_description: "Festival Latinoamericano de Instalación de Software Libre\nCiudad Autónoma de Buenos Aires"
                },
                {
                    name             : "Flisol Avellaneda 2016",
                    date             : "2016-04-25T10:00Z",
                    external_url     : null,
                    home_image       : "http://linware.com.ar/wp-content/uploads/2014/04/140414-3.jpg",
                    short_description: "Festival Latinoamericano de Instalación de Software Libre\nAvellaneda"
                },
                {
                    name             : "FLISoL Corrientes 2016",
                    date             : "2016-04-25T10:00Z",
                    external_url     : null,
                    home_image       : "http://www.saltalug.org.ar/files/drupalbb/eventos/2010/flisol/logo_flisol.png",
                    short_description: "Festival Latinoamericano de Instalación de Software Libre\nCorrientes"
                },
                {
                    name             : "FLISoL Ushuaia 2016",
                    date             : "2016-04-25T10:00Z",
                    external_url     : null,
                    home_image       : "https://pbs.twimg.com/profile_images/582040550989234176/7KebUohF.png",
                    short_description: "Festival Latinoamericano de Instalación de Software Libre\nUshuaia"
                },
                {
                    name             : "Flisol San Salvador de Jujuy 2016",
                    date             : "2016-04-25T10:00Z",
                    external_url     : null,
                    home_image       : "http://www.telam.com.ar/advf/imagenes/2015/04/5537c1dcaa2f2_760x506.jpg",
                    short_description: "Festival Latinoamericano de Instalación de Software Libre\n San Salvador de Jujuy"
                },
                {
                    name             : "Flisol Santa Fe 2016",
                    date             : "2016-04-25T10:00Z",
                    external_url     : null,
                    home_image       : "http://yosobreip.com.ar/wp-content/uploads/2011/04/flisol11.png",
                    short_description: "Festival Latinoamericano de Instalación de Software Libre\nSanta Fe"
                }
            ]);

        scope          = $rootScope.$new();
        MainController = $controller('MainController', {
            $scope: scope
        });
    }));

    it('should attach a list of events to the controller', function() {
        $httpBackend.flush();
        MainController.events.length.should.equal(6);
    });
});
