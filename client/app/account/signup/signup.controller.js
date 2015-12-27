'use strict';

class SignupController {

    constructor(Auth, $location) {
        this.Auth      = Auth;
        this.$location = $location;
        this.user      = {};
        this.errors    = {};
        this.submitted = false;
    }

    register(form) {
        this.submitted = true;

        if(form.$valid) {
            this.Auth.createUser({
                    name    : this.user.name,
                    email   : this.user.email,
                    password: this.user.password
                })
                .then(() => {
                    // Account created, redirect to home
                    this.$location.path('/');
                })
                .catch(err => {
                    err         = err.data;
                    this.errors = {};

                    angular.forEach(err.errors, (error, field) => {
                        form[field].$setValidity('error', false);
                        this.errors[field] = error.message;
                    });
                });
        }
    }
}

angular.module('eventoLFrontendApp')
    .controller('SignupController', SignupController);
