
module.exports = {
  firstResult: element(by.css('ul > li:nth-child(1) > div.mt-n1 > div.f4.text-normal > a')),
  resultList: element.all(by.css('.repo-list li')),
  resultTitle: element(by.css('h3:not(.Box-title):not(.mb-1)')),
  searchInput: element(by.css('[name="q"]')),
  statusBar: element.all(by.css('article > a > img')),
}
