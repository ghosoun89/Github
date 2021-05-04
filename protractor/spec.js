
const locators = require('./pageObject/locatorsPageObject')
const searchPageObject = require('./pageObject/searchPageObjects');

describe('Verify Github search functionality ', () => {
  it('Verify searching for a repo ans selecting a result works successfully', async () => {
    const resultTitleRegex = new RegExp(/^\d{1,}\srepository results/)
    browser.get('/');
    const placeHolderValue = await locators.searchInput.getAttribute('placeholder');
    expect(placeHolderValue).toEqual('Search GitHub');
    await searchPageObject.typeKeys(locators.searchInput, 'python/cpython' + protractor.Key.ENTER);
    const resultTitleText = await locators.resultTitle.getAttribute('textContent');
    expect(resultTitleText.trim()).toMatch(resultTitleRegex)
    const firstResultTitle = await locators.firstResult.getAttribute('textContent');
    expect(firstResultTitle).toEqual('python/cpython')
    const hrefValue = await locators.firstResult.getAttribute('href');
    expect(hrefValue).toEqual('https://github.com/python/cpython');
    await locators.firstResult.click();
    const currentURL = await browser.getCurrentUrl();
    expect(currentURL).toEqual(hrefValue);
    (await locators.statusBar).forEach(async (element) => {
      expect(await element.isDisplayed()).toBe(true);
    })
  });
});
