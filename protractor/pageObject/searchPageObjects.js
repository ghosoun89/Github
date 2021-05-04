/**
 * @param {Object} selector
 * @param {string} value the value to type
 *
 * @returns {string} written value
 */
const typeKeys = async (selector, value) => {
  return selector.sendKeys(value)
}

module.exports = {
  typeKeys,
}
