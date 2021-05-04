exports.config = {
  framework: 'jasmine',
  baseUrl: 'https://github.com/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],

  // test set up
  onPrepare() {
    // ignore synchronization; this is only needed for angular apps
    browser.ignoreSynchronization = true;

    // define global vars
    global.wd = browser.driver;
    global.defaultWaitTimeout = 50000;
    global.ec = protractor.ExpectedConditions;
  },
}
