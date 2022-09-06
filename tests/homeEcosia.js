module.exports = {
    'Demo test ecosia.org': function (browser) {
      //Create instance of the pageobject
      const page = browser.page.homeEcosiaPO();
      browser.windowMaximize();
  
      page
        .navigate()
        .assert.visible('@txtSearchBox', "Check if search box is visible")
        .saveScreenshot('tests_output/snaApshots/dashboad.png')
        .setValue('@txtSearchBox', 'nightwatch')
        .assert.visible('@btnSearch')
        .click('@btnSearch')
        .assert.containsText('@searchResults', 'Nightwatch.js')
        .end();
    }
  };