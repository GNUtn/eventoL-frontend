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
                        name: "Activity Proposals",
                        slug: "activity-proposals"
                    },
                    {
                        name: "Activities Schedule",
                        slug: "activities-schedule"
                    },
                    {
                        name: "Installations",
                        slug: "installations"
                    },
                    {
                        name: "Registration",
                        slug: "registrations"
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

        $httpBackend.whenGET(/^\/api\/rooms\/1$/)
            .respond(
                [
                    {name: "Sala C"},
                    {name: "Sala D"},
                    {name: "Sala E"},
                    {name: "Sala F"},
                    {name: "Sala Alberdi"}
                ]
            );

        $httpBackend.whenGET(/^\/api\/activities\/proposals\/1$/)
            .respond(
                [
                    {
                        title           : "Lorem ipsum ad his scripta blandit partiendo",
                        long_description: "Quo mundi lobortis reformidans eu, legimus senserit definiebas an eos. Eu sit tincidunt incorrupte definitionem, vis mutat affert percipit cu, eirmod consectetuer signiferumque eu per. In usu latine equidem dolores. Quo no falli viris intellegam, ut fugit veritus placerat per.",
                        abstract        : "Qui ut wisi vocibus suscipiantur, quo dicit ridens inciderint id",
                        confirmed       : false,
                        type            : {name: "Talk"},
                        speakers        : "Lorem Ipsum, Neque Porro",
                        speakers_email  : "lorem@ipsum.com, neque@porro.com.ar",
                        labels          : "Lorem, Ipsum, Neque, Porro",
                        level           : {name: "Advanced"},
                        presentation    : "#"
                    },
                    {
                        title           : "Ea mei nullam facete, omnis oratio offendit ius cu",
                        long_description: "Doming takimata repudiandae usu an, mei dicant takimata id, pri eleifend inimicus euripidis at. His vero singulis ea, quem euripidis abhorreant mei ut, et populo iriure vix. Usu ludus affert voluptaria ei, vix ea error definitiones, movet fastidii signiferumque in qui.",
                        abstract        : "Vis prodesset adolescens adipiscing te, usu mazim perfecto recteque at, assum putant erroribus mea in",
                        confirmed       : false,
                        type            : {name: "Talk"},
                        speakers        : "Lorem Ipsum, Neque Porro",
                        speakers_email  : "lorem@ipsum.com, neque@porro.com.ar",
                        labels          : "Lorem, Ipsum, Neque, Porro",
                        level           : {name: "Advanced"},
                        presentation    : "#"
                    },
                    {
                        title           : "Mea te unum viderer dolores",
                        long_description: "Sed iusto nihil populo an, ex pro novum homero cotidieque. Te utamur civibus eleifend qui, nam ei brute doming concludaturque, modo aliquam facilisi nec no. Vidisse maiestatis constituam eu his, esse pertinacia intellegam ius cu. Eos ei odio veniam, eu sumo altera adipisci eam, mea audiam prodesset persequeris ea. Ad vitae dictas vituperata sed, eum posse labore postulant id. Te eligendi principes dignissim sit, te vel dicant officiis repudiandae.",
                        abstract        : "Dicant utinam philosophia has cu, hendrerit prodesset at nam, eos an bonorum dissentiet. Has ad placerat intellegam consectetuer, no adipisci mandamus senserit pro, torquatos similique percipitur est ex.",
                        confirmed       : false,
                        type            : {name: "Talk"},
                        speakers        : "Lorem Ipsum, Neque Porro",
                        speakers_email  : "lorem@ipsum.com, neque@porro.com.ar",
                        labels          : "Lorem, Ipsum, Neque, Porro",
                        level           : {name: "Advanced"},
                        presentation    : "#"
                    }

                ]
            );

        $httpBackend.whenGET(/^\/api\/attendants\/flisol-caba$/)
            .respond(
                [
                    {
                        "gender"           : "Male",
                        "first_name"       : "Dennis",
                        "last_name"        : "Cox",
                        "username"         : "dcox0",
                        "email"            : "dcox0@trellian.com",
                        "last_login"       : "2016-02-16T14:33:39Z",
                        "date_joined"      : "2015-03-29T07:12:12Z",
                        "collaborator"     : true,
                        "installer"        : false,
                        "need_installation": false,
                        "speaker"          : true,
                        "phone"            : "234-(678)745-1287",
                        "address"          : "13291 Eagle Crest Avenue"
                    }, {
                    "gender"           : "Male",
                    "first_name"       : "Christopher",
                    "last_name"        : "Carpenter",
                    "username"         : "ccarpenter1",
                    "email"            : "ccarpenter1@sciencedirect.com",
                    "last_login"       : "2015-03-23T16:03:53Z",
                    "date_joined"      : "2015-06-15T15:25:24Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : true,
                    "phone"            : "385-(195)994-1078",
                    "address"          : "75 Sloan Plaza"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Russell",
                    "last_name"        : "Little",
                    "username"         : "rlittle2",
                    "email"            : "rlittle2@google.co.uk",
                    "last_login"       : "2015-10-02T22:03:32Z",
                    "date_joined"      : "2015-06-21T14:27:02Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": false,
                    "speaker"          : false,
                    "phone"            : "33-(285)865-9969",
                    "address"          : "07710 Veith Park"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Gary",
                    "last_name"        : "Peterson",
                    "username"         : "gpeterson3",
                    "email"            : "gpeterson3@walmart.com",
                    "last_login"       : "2015-07-24T10:18:27Z",
                    "date_joined"      : "2015-08-10T05:00:13Z",
                    "collaborator"     : true,
                    "installer"        : false,
                    "need_installation": false,
                    "speaker"          : false,
                    "phone"            : "48-(764)393-5911",
                    "address"          : "7 Judy Alley"
                }, {
                    "gender"           : "Female",
                    "first_name"       : "Lois",
                    "last_name"        : "Wood",
                    "username"         : "lwood4",
                    "email"            : "lwood4@phpbb.com",
                    "last_login"       : "2015-04-25T08:46:48Z",
                    "date_joined"      : "2016-01-29T07:18:40Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : true,
                    "phone"            : "62-(363)708-1305",
                    "address"          : "11 Amoth Road"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Jeremy",
                    "last_name"        : "Tucker",
                    "username"         : "jtucker5",
                    "email"            : "jtucker5@arstechnica.com",
                    "last_login"       : "2015-03-10T17:21:47Z",
                    "date_joined"      : "2015-09-24T04:16:10Z",
                    "collaborator"     : false,
                    "installer"        : false,
                    "need_installation": false,
                    "speaker"          : true,
                    "phone"            : "86-(909)274-0118",
                    "address"          : "295 Transport Junction"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Sean",
                    "last_name"        : "Carter",
                    "username"         : "scarter6",
                    "email"            : "scarter6@nydailynews.com",
                    "last_login"       : "2015-06-17T22:01:38Z",
                    "date_joined"      : "2016-02-24T10:59:16Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : false,
                    "phone"            : "380-(429)905-2645",
                    "address"          : "779 Orin Center"
                }, {
                    "gender"           : "Female",
                    "first_name"       : "Jennifer",
                    "last_name"        : "Barnes",
                    "username"         : "jbarnes7",
                    "email"            : "jbarnes7@nymag.com",
                    "last_login"       : "2015-06-22T03:04:01Z",
                    "date_joined"      : "2015-11-09T08:46:31Z",
                    "collaborator"     : false,
                    "installer"        : true,
                    "need_installation": false,
                    "speaker"          : false,
                    "phone"            : "86-(576)518-2317",
                    "address"          : "74 Barnett Court"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Frank",
                    "last_name"        : "Garcia",
                    "username"         : "fgarcia8",
                    "email"            : "fgarcia8@biglobe.ne.jp",
                    "last_login"       : "2015-11-14T21:42:10Z",
                    "date_joined"      : "2015-07-15T14:45:33Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : false,
                    "phone"            : "84-(460)197-4825",
                    "address"          : "0 Sloan Plaza"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Kenneth",
                    "last_name"        : "Carr",
                    "username"         : "kcarr9",
                    "email"            : "kcarr9@slideshare.net",
                    "last_login"       : "2015-10-16T06:57:23Z",
                    "date_joined"      : "2015-09-13T21:21:40Z",
                    "collaborator"     : false,
                    "installer"        : false,
                    "need_installation": true,
                    "speaker"          : false,
                    "phone"            : "47-(716)312-7198",
                    "address"          : "2 Sutherland Street"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Dennis",
                    "last_name"        : "Cox",
                    "username"         : "dcox0",
                    "email"            : "dcox0@trellian.com",
                    "last_login"       : "2016-02-16T14:33:39Z",
                    "date_joined"      : "2015-03-29T07:12:12Z",
                    "collaborator"     : true,
                    "installer"        : false,
                    "need_installation": false,
                    "speaker"          : true,
                    "phone"            : "234-(678)745-1287",
                    "address"          : "13291 Eagle Crest Avenue"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Christopher",
                    "last_name"        : "Carpenter",
                    "username"         : "ccarpenter1",
                    "email"            : "ccarpenter1@sciencedirect.com",
                    "last_login"       : "2015-03-23T16:03:53Z",
                    "date_joined"      : "2015-06-15T15:25:24Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : true,
                    "phone"            : "385-(195)994-1078",
                    "address"          : "75 Sloan Plaza"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Russell",
                    "last_name"        : "Little",
                    "username"         : "rlittle2",
                    "email"            : "rlittle2@google.co.uk",
                    "last_login"       : "2015-10-02T22:03:32Z",
                    "date_joined"      : "2015-06-21T14:27:02Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": false,
                    "speaker"          : false,
                    "phone"            : "33-(285)865-9969",
                    "address"          : "07710 Veith Park"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Gary",
                    "last_name"        : "Peterson",
                    "username"         : "gpeterson3",
                    "email"            : "gpeterson3@walmart.com",
                    "last_login"       : "2015-07-24T10:18:27Z",
                    "date_joined"      : "2015-08-10T05:00:13Z",
                    "collaborator"     : true,
                    "installer"        : false,
                    "need_installation": false,
                    "speaker"          : false,
                    "phone"            : "48-(764)393-5911",
                    "address"          : "7 Judy Alley"
                }, {
                    "gender"           : "Female",
                    "first_name"       : "Lois",
                    "last_name"        : "Wood",
                    "username"         : "lwood4",
                    "email"            : "lwood4@phpbb.com",
                    "last_login"       : "2015-04-25T08:46:48Z",
                    "date_joined"      : "2016-01-29T07:18:40Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : true,
                    "phone"            : "62-(363)708-1305",
                    "address"          : "11 Amoth Road"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Jeremy",
                    "last_name"        : "Tucker",
                    "username"         : "jtucker5",
                    "email"            : "jtucker5@arstechnica.com",
                    "last_login"       : "2015-03-10T17:21:47Z",
                    "date_joined"      : "2015-09-24T04:16:10Z",
                    "collaborator"     : false,
                    "installer"        : false,
                    "need_installation": false,
                    "speaker"          : true,
                    "phone"            : "86-(909)274-0118",
                    "address"          : "295 Transport Junction"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Sean",
                    "last_name"        : "Carter",
                    "username"         : "scarter6",
                    "email"            : "scarter6@nydailynews.com",
                    "last_login"       : "2015-06-17T22:01:38Z",
                    "date_joined"      : "2016-02-24T10:59:16Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : false,
                    "phone"            : "380-(429)905-2645",
                    "address"          : "779 Orin Center"
                }, {
                    "gender"           : "Female",
                    "first_name"       : "Jennifer",
                    "last_name"        : "Barnes",
                    "username"         : "jbarnes7",
                    "email"            : "jbarnes7@nymag.com",
                    "last_login"       : "2015-06-22T03:04:01Z",
                    "date_joined"      : "2015-11-09T08:46:31Z",
                    "collaborator"     : false,
                    "installer"        : true,
                    "need_installation": false,
                    "speaker"          : false,
                    "phone"            : "86-(576)518-2317",
                    "address"          : "74 Barnett Court"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Frank",
                    "last_name"        : "Garcia",
                    "username"         : "fgarcia8",
                    "email"            : "fgarcia8@biglobe.ne.jp",
                    "last_login"       : "2015-11-14T21:42:10Z",
                    "date_joined"      : "2015-07-15T14:45:33Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : false,
                    "phone"            : "84-(460)197-4825",
                    "address"          : "0 Sloan Plaza"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Kenneth",
                    "last_name"        : "Carr",
                    "username"         : "kcarr9",
                    "email"            : "kcarr9@slideshare.net",
                    "last_login"       : "2015-10-16T06:57:23Z",
                    "date_joined"      : "2015-09-13T21:21:40Z",
                    "collaborator"     : false,
                    "installer"        : false,
                    "need_installation": true,
                    "speaker"          : false,
                    "phone"            : "47-(716)312-7198",
                    "address"          : "2 Sutherland Street"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Dennis",
                    "last_name"        : "Cox",
                    "username"         : "dcox0",
                    "email"            : "dcox0@trellian.com",
                    "last_login"       : "2016-02-16T14:33:39Z",
                    "date_joined"      : "2015-03-29T07:12:12Z",
                    "collaborator"     : true,
                    "installer"        : false,
                    "need_installation": false,
                    "speaker"          : true,
                    "phone"            : "234-(678)745-1287",
                    "address"          : "13291 Eagle Crest Avenue"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Christopher",
                    "last_name"        : "Carpenter",
                    "username"         : "ccarpenter1",
                    "email"            : "ccarpenter1@sciencedirect.com",
                    "last_login"       : "2015-03-23T16:03:53Z",
                    "date_joined"      : "2015-06-15T15:25:24Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : true,
                    "phone"            : "385-(195)994-1078",
                    "address"          : "75 Sloan Plaza"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Russell",
                    "last_name"        : "Little",
                    "username"         : "rlittle2",
                    "email"            : "rlittle2@google.co.uk",
                    "last_login"       : "2015-10-02T22:03:32Z",
                    "date_joined"      : "2015-06-21T14:27:02Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": false,
                    "speaker"          : false,
                    "phone"            : "33-(285)865-9969",
                    "address"          : "07710 Veith Park"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Gary",
                    "last_name"        : "Peterson",
                    "username"         : "gpeterson3",
                    "email"            : "gpeterson3@walmart.com",
                    "last_login"       : "2015-07-24T10:18:27Z",
                    "date_joined"      : "2015-08-10T05:00:13Z",
                    "collaborator"     : true,
                    "installer"        : false,
                    "need_installation": false,
                    "speaker"          : false,
                    "phone"            : "48-(764)393-5911",
                    "address"          : "7 Judy Alley"
                }, {
                    "gender"           : "Female",
                    "first_name"       : "Lois",
                    "last_name"        : "Wood",
                    "username"         : "lwood4",
                    "email"            : "lwood4@phpbb.com",
                    "last_login"       : "2015-04-25T08:46:48Z",
                    "date_joined"      : "2016-01-29T07:18:40Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : true,
                    "phone"            : "62-(363)708-1305",
                    "address"          : "11 Amoth Road"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Jeremy",
                    "last_name"        : "Tucker",
                    "username"         : "jtucker5",
                    "email"            : "jtucker5@arstechnica.com",
                    "last_login"       : "2015-03-10T17:21:47Z",
                    "date_joined"      : "2015-09-24T04:16:10Z",
                    "collaborator"     : false,
                    "installer"        : false,
                    "need_installation": false,
                    "speaker"          : true,
                    "phone"            : "86-(909)274-0118",
                    "address"          : "295 Transport Junction"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Sean",
                    "last_name"        : "Carter",
                    "username"         : "scarter6",
                    "email"            : "scarter6@nydailynews.com",
                    "last_login"       : "2015-06-17T22:01:38Z",
                    "date_joined"      : "2016-02-24T10:59:16Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : false,
                    "phone"            : "380-(429)905-2645",
                    "address"          : "779 Orin Center"
                }, {
                    "gender"           : "Female",
                    "first_name"       : "Jennifer",
                    "last_name"        : "Barnes",
                    "username"         : "jbarnes7",
                    "email"            : "jbarnes7@nymag.com",
                    "last_login"       : "2015-06-22T03:04:01Z",
                    "date_joined"      : "2015-11-09T08:46:31Z",
                    "collaborator"     : false,
                    "installer"        : true,
                    "need_installation": false,
                    "speaker"          : false,
                    "phone"            : "86-(576)518-2317",
                    "address"          : "74 Barnett Court"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Frank",
                    "last_name"        : "Garcia",
                    "username"         : "fgarcia8",
                    "email"            : "fgarcia8@biglobe.ne.jp",
                    "last_login"       : "2015-11-14T21:42:10Z",
                    "date_joined"      : "2015-07-15T14:45:33Z",
                    "collaborator"     : true,
                    "installer"        : true,
                    "need_installation": true,
                    "speaker"          : false,
                    "phone"            : "84-(460)197-4825",
                    "address"          : "0 Sloan Plaza"
                }, {
                    "gender"           : "Male",
                    "first_name"       : "Kenneth",
                    "last_name"        : "Carr",
                    "username"         : "kcarr9",
                    "email"            : "kcarr9@slideshare.net",
                    "last_login"       : "2015-10-16T06:57:23Z",
                    "date_joined"      : "2015-09-13T21:21:40Z",
                    "collaborator"     : false,
                    "installer"        : false,
                    "need_installation": true,
                    "speaker"          : false,
                    "phone"            : "47-(716)312-7198",
                    "address"          : "2 Sutherland Street"
                }

                ]
            );
    });
if(angular.mock) {
    angular.element(document).ready(function() {
        'use strict';
        angular.bootstrap(document, ['eventoLFrontendAppDev']);
    });
}
