import {secureAreaPageLocators} from "./secureAreaPageLocators.js";

class SecureAreaPage {
    username() {
        return cy.get(secureAreaPageLocators.username);
    }
}

export const secureAreaPage = new SecureAreaPage();