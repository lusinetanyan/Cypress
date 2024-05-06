import {homePageLocators} from "./homePageLocators.js";

class HomePage {
    navigateToLoginPage() {
        cy.xpath(homePageLocators.loginButton).click();
    }

    searchMovie(movieKeyword) {
        cy.get(homePageLocators.searchField).type(movieKeyword);
        cy.xpath(homePageLocators.searchButton).click();
    }
}

export const homePage = new HomePage();