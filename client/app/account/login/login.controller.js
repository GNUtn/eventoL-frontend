'use strict';

class LoginController {

    constructor(Auth, $location) {
        this.Auth      = Auth;
        this.$location = $location;
        this.user      = {};
        this.errors    = {};
        this.submitted = false;
    }

    login(form) {
        this.submitted = true;

        if(form.$valid) {
            this.Auth.login({
                    email   : this.user.email,
                    password: this.user.password
                })
                .then(() => {
                    // Logged in, redirect to home
                    this.$location.path('/');
                })
                .catch(err => {
                    this.errors.other = err.message;
                });
        }
    }
}

angular.module('eventoLFrontendApp')
    .controller('LoginController', LoginController);
