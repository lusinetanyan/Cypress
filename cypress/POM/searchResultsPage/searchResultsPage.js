import {searchResultsPageLocators} from "./searchResultsPageLocators.js";

class SearchResultsPage {
    getSearchResults() {
        cy.xpath(searchResultsPageLocators.searchResults).then($bulkResult => {
            if ($bulkResult.text().includes('There are no movies that matched your query.')) {
                return [];
            } else {
                cy.get(searchResultsPageLocators.movies).then($movies => {
                    return $movies.find(searchResultsPageLocators.titles).map((index, element) => Cypress.$(element).text()).get();
                });
            }
        });
    }
}

export const searchResultsPage = new SearchResultsPage();