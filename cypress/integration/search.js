
const locators = require('../locators/searchLocators')

describe('Verify Github search functionality ', () => {
  it('Verify searching for a repo ans selecting a result works successfully', () => {
    const resultTitleRegex = new RegExp(/^\d{1,}\srepository results/)
    cy.visit('https://github.com/');
    cy.get(locators.searchInput).should('have.attr', 'placeholder', 'Search GitHub')
    cy.typeKeys(locators.searchInput, 'python/cpython {enter}');
    cy.get(locators.resultTitle).invoke('text').then((text) => {
      expect(text.trim()).match(resultTitleRegex)
    })
    cy.get(locators.firstResult).should('have.text', 'python/cpython');
    cy.get(locators.firstResult).should('have.attr', 'href').and('include', '/python/cpython');
    cy.get(locators.firstResult).click();
    cy.url().should('eq', 'https://github.com/python/cpython');
    cy.get(locators.statusBar).each((element) => {
      cy.get(element).should('be.visible');
    });
  });
});
