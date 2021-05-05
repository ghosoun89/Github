/**
 * @param {Object} selector
* @param {string} value the value to type
*
* @returns {string} written value
*/
Cypress.Commands.add("typeKeys", (selector, value) => {
  cy.get(selector).type(value)
})
