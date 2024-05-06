import {homePage} from "../POM/homePage/homePage.js";
import {loginPage} from "../POM/loginPage/loginPage.js";
import {secureAreaPage} from "../POM/secureAreaPage/secureAreaPage.js";

describe('Login Tests', () => {
    it('Valid Login', () => {
        cy.visit('https://www.themoviedb.org');
        homePage.navigateToLoginPage();
        loginPage.enterUsername('lusine_tanyan');
        loginPage.enterPassword('pomhomework');
        loginPage.clickOnLoginButton();
        secureAreaPage.username().should('contain', 'lusine_tanyan');
    });
});
