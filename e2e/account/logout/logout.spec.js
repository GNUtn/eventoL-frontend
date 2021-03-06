'use strict';

var config = browser.params;

describe('Logout View', function() {
    var login = function(user) {
        let promise = browser.get(config.baseUrl + '/login');
        require('../login/login.po').login(user);
        return promise;
    };

    var testUser = {
        name    : 'Test User',
        email   : 'test@example.com',
        password: 'test'
    };

    describe('with local auth', function() {

        it('should logout a user and redirecting to "/"', function() {
            var navbar = require('../../components/navbar/navbar.po');

            browser.getCurrentUrl().should.eventually.equal(config.baseUrl + '/');
            navbar.navbarAccountGreeting.getText().should.eventually.equal('Hello ' + testUser.name);

            browser.get(config.baseUrl + '/logout');

            navbar = require('../../components/navbar/navbar.po');

            browser.getCurrentUrl().should.eventually.equal(config.baseUrl + '/');
            navbar.navbarAccountGreeting.isDisplayed().should.eventually.equal(false);
        });

    });
});
