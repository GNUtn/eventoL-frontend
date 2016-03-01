angular
    .module('eventoLFrontendAppDev', ['eventoLFrontendApp', 'ngMockE2E'])
    .run(function($httpBackend) {
        'use strict';

        $httpBackend.whenGET(/app\/.*/).passThrough();
        $httpBackend.whenGET(/components\/.*/).passThrough();

        /* backend API calls here */
        $httpBackend.whenGET(/^\/api\/things/).respond(200, []);
        $httpBackend.whenPOST(/^\/auth\/local/).respond(200, {token: 1234});
        $httpBackend.whenGET(/^\/api\/users\/me/).respond(200, {
            name: 'Test User',
            role: 'user'
        });
        $httpBackend.whenGET(/^\/api\/events$/)
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

        $httpBackend.whenGET(/^\/api\/events\/flisol-caba$/)
            .respond({
                id               : 1,
                title            : "FLISoL CABA",
                slug             : "flisol-caba",
                short_description: "An awesome event!",
                dates            : ["2016-02-25T03:00:00.000Z", "2016-02-26T03:00:00.000Z"],
                cover_image      : "https://static.pexels.com/photos/4124/people-crowd-event-amusement-park.jpeg",
                description      : "<h1>Lorem ipsum</h1><h4>Neque porro quisquam est qui dolorem?</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis eros feugiat, aliquam nislviverra, malesuada urna. Vivamus in orci at ex efficitur vehicula vitae eu metus. Pellentesquehabitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse ut dolor molestie, vestibulum nunc id, finibus ante. Quisque eu neque lacinia erat ultricies vehicula. Donec consequat neque vitae tellus tincidunt congue. Quisque placerat convallis tortor at dapibus. Vivamus id arcu justo. Duis eget nisl ante. Vestibulum tincidunt est nec efficitur convallis. Fusce eget erat eget dui lobortis semper in ac est.</p> <h4>Pellentesque vel fringilla quam</h4> <p>Sed nibh lacus, convallis ut blandit quis, maximus sed purus. Nam sed magna eros. Quisque nunc lorem, dignissim sit amet auctor pulvinar, ultrices at nisl. Pellentesque auctor aliquet nunc eu mollis. Integer quis lorem mi. Curabitur in ornare enim. Sed aliquam pharetra urna, vitae ullamcorper lacus tincidunt ac. Vivamus id massa consequat, aliquam tellus et, commodo lorem. Praesent ultricies vel eros et placerat. Morbi id molestie turpis. Suspendisse potenti. Pellentesque venenatis risus non rutrum lacinia. Praesent nec viverra velit, non ullamcorper nisl. Nulla sagittis mi et diam dictum suscipit. Integer gravida velit eu elit consectetur dictum.</p> <h4>Aenean sed efficitur elit</h4> <p>Sed purus nisl, viverra in hendrerit vitae, aliquet sit amet sapien. Pellentesque accumsan non tellus tincidunt vulputate. Integer tincidunt massa vitae magna mollis efficitur. Pellentesque vel fringilla quam. Phasellus vehicula eleifend diam, et varius velit pellentesque a. Duis tincidunt urna id quam commodo, id faucibus turpis vehicula. Ut pulvinar ligula sit amet enim porttitor convallis. Sed blandit arcu sit amet justo gravida, eu dignissim diam viverra. Nulla sagittis, velit vel fringilla condimentum, enim diam tempor eros, viverra congue elit velit a leo. Aenean consectetur felis ut vestibulum porttitor.</p> <h4>Proin eu euismod enim</h4> <p>Proin molestie scelerisque tortor egestas tempor. Nulla sed hendrerit sapien. Aenean sed efficitur elit, quis porta dolor. Ut pellentesque volutpat lectus a placerat. Maecenas commodo euismod leo mollis tincidunt. Morbi augue arcu, porttitor et pulvinar id, dignissim at magna. Sed eget risus tellus. Morbi convallis justo a elit pellentesque pretium. Maecenas consequat tincidunt magna in pretium. Donec sed elit interdum, egestas augue ut, porttitor nisi. Quisque sed consequat sapien. Aliquam vel tincidunt mauris. Nam sit amet rhoncus odio, a facilisis ex. Proin non tincidunt lacus, at vehicula nulla. Maecenas a viverra tellus. Vivamus venenatis sollicitudin est eget varius.</p>",
                place            : {
                    address_components: [
                        {"long_name": "951", "short_name": "951", "types": ["street_number"]},
                        {"long_name": "Avenida Medrano", "short_name": "Av. Medrano", "types": ["route"]},
                        {"long_name": "Buenos Aires", "short_name": "Buenos Aires", "types": ["locality", "political"]},
                        {
                            "long_name" : "Ciudad Autónoma de Buenos Aires",
                            "short_name": "CABA",
                            "types"     : ["administrative_area_level_1", "political"]
                        },
                        {"long_name": "Argentina", "short_name": "AR", "types": ["country", "political"]},
                        {"long_name": "C1179", "short_name": "C1179", "types": ["postal_code"]},
                        {"long_name": "AAQ", "short_name": "AAQ", "types": ["postal_code_suffix"]}
                    ],
                    formatted_address : "Av. Medrano 951, C1179AAQ CABA, Argentina",
                    name              : "UTN FRBA Medrano",
                    url               : "https://maps.google.com/?cid=8793909943377951298",
                    vicinity          : "Avenida Medrano 951",
                    geometry          : {
                        lat: -34.598564,
                        lng: -58.4199979
                    }
                },
                features         : [
                    {
                        name: "Talks",
                        slug: "talks"
                    },
                    {
                        name: "Registration",
                        slug: "registration"
                    }
                ],
                contacts         : [
                    {
                        url : "https://www.facebook.com/Flisol.caba",
                        icon: "fa-facebook-official"
                    },
                    {
                        url : "https://twitter.com/FlisolCABA",
                        icon: "fa-twitter-square"
                    },
                    {
                        url : "mailto:contacto@flisolcaba.usla.org.ar",
                        icon: "fa-envelope"
                    }
                ]
            });
    });
if(angular.mock) {
    angular.element(document).ready(function() {
        'use strict';
        angular.bootstrap(document, ['eventoLFrontendAppDev']);
    });
}
