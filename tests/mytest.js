module.exports = {
    'X is my testcase name' : function (browser) {
      browser
        .url('https://www.ecosia.org/')
        .windowMaximize()
        .waitForElementVisible('body')
        .assert.titleContains('Ecosia')
        .assert.visible('input[type=search]')
        .saveScreenshot('tests_output/snapshots/dashboad.png')
        .setValue('input[type=search]', 'nightwatch')
        .assert.visible('button[type=submit]')
        .click('button[type=submit]')
        .end();
    }
  };