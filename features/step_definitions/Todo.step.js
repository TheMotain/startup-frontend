const cucumber = require('cucumber');
const assert = require('assert');

cucumber.defineSupportCode(function ({When, Then}) {

    When('I wrote {string} on the input', function (string, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });


    When('I click on Add Todo Button', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });


    Then('The todo {string} is created', function (string, callback) {
        assert.equal(false, true);
        callback();
    });
});