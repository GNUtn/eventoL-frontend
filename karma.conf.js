// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['mocha', 'chai', 'sinon-chai', 'chai-as-promised', 'chai-things'],

        client: {
            mocha: {
                timeout: 5000 // set default mocha spec timeout
            }
        },

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'client/bower_components/jquery/dist/jquery.js',
            'client/bower_components/arrive/src/arrive.js',
            'client/bower_components/angular/angular.js',
            'client/bower_components/bootstrap/dist/js/bootstrap.js',
            'client/bower_components/angular-resource/angular-resource.js',
            'client/bower_components/angular-cookies/angular-cookies.js',
            'client/bower_components/angular-route/angular-route.js',
            'client/bower_components/lodash/lodash.js',
            'client/bower_components/angular-validation-match/dist/angular-validation-match.min.js',
            'client/bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
            'client/bower_components/bootstrap-material-design/dist/js/material.js',
            'client/bower_components/bootstrap-material-design/dist/js/ripples.js',
            'client/bower_components/angular-wizard/dist/angular-wizard.min.js',
            'client/bower_components/angular-img-cropper/dist/angular-img-cropper.min.js',
            'client/bower_components/moment/moment.js',
            'client/bower_components/MultipleDatePicker/dist/multipleDatePicker.min.js',
            'client/bower_components/ngmap/build/scripts/ng-map.js',
            'client/bower_components/rangy/rangy-core.js',
            'client/bower_components/rangy/rangy-classapplier.js',
            'client/bower_components/rangy/rangy-highlighter.js',
            'client/bower_components/rangy/rangy-selectionsaverestore.js',
            'client/bower_components/rangy/rangy-serializer.js',
            'client/bower_components/rangy/rangy-textrange.js',
            'client/bower_components/textAngular/dist/textAngular.js',
            'client/bower_components/textAngular/dist/textAngular-sanitize.js',
            'client/bower_components/textAngular/dist/textAngularSetup.js',
            'client/bower_components/angular-ui-grid/ui-grid.js',
            'client/bower_components/angular-aria/angular-aria.js',
            'client/bower_components/angular-touch/angular-touch.js',
            'client/bower_components/pdfmake/build/pdfmake.js',
            'client/bower_components/pdfmake/build/vfs_fonts.js',
            'client/bower_components/angular-animate/angular-animate.js',
            'client/bower_components/angular-mocks/angular-mocks.js',
            // endbower
            'client/app/app.js',
            'client/{app,components}/**/*.module.js',
            'client/{app,components}/**/*.js',
            'client/{app,components}/**/*.html'
        ],

        preprocessors: {
            '**/*.html'                      : 'ng-html2js',
            'client/{app,components}/**/*.js': 'babel'
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'client/'
        },

        babelPreprocessor: {
            options       : {
                sourceMap: 'inline',
                optional : [
                    'es7.classProperties'
                ]
            },
            filename      : function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // reporter types:
        // - dots
        // - progress (default)
        // - spec (karma-spec-reporter)
        // - junit
        // - growl
        // - coverage
        reporters: ['spec'],

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
