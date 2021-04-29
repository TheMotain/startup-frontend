const cucumber = require('cucumber');
const Selector = require('testcafe').Selector;

cucumber.defineSupportCode(function ({Given, When, Then}) {
    let t;
    let t2;

    let addMessage = Selector('.add-message-component');
    let messageList = Selector('.message-list-component');


    Given('I am in the chat page', function () {
        return this.waitForTestController()
            .then(function (tc) {
                t = tc;

                return t.navigateTo('http://localhost:3000');
            });
    });

    When('I wrote {string} in the chat input', function (text) {
        return t.typeText(addMessage.find("input"), text);
    });

    When('I click on the send button', function () {
        return t.click(addMessage.find("button"));
    });

    Then('A {string} message is printed', function (text) {
        const messageLi = messageList.find("li").with({boundTestRun: t});

        return t.expect(messageLi.textContent).contains(text);
    });


    /*********************************/

    Given('I open two chat window', function () {
        return this.waitForTestController()
            .then((tc) => {
                t = tc;
                return t.navigateTo('http://localhost:3000');
            }).then(() => {
                return this.waitForTestController().then((tc) => {
                    t2 = tc;

                    return t2.navigateTo('http://localhost:3000');
                })
            });
    });

    When('I wrote {string} in the chat input in the first window', async function (text) {
        await t.typeText(addMessage.find("input"), text);
        await t.expect(addMessage.find("input").with({boundTestRun: t}).value).eql(text);
        return t2.expect(addMessage.find("input").with({boundTestRun: t2}).value).eql(text);
    });

    When('I click on the send button in the first window', function () {
        return t.click(addMessage.find("button"));
    });

    Then('A {string} message is printed in the second window', function (text) {
        const messageLi = messageList.find("li").with({boundTestRun: t2});
        return t2.expect(messageLi.textContent).contains(text);
    });


});