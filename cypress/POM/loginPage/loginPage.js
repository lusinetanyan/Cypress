import {loginPageLocators} from "./loginPageLocators";

class LoginPage {
    elements = {
        username: () => {
            return cy.get(loginPageLocators.usernameField);
        },

        password: () => {
            return cy.get(loginPageLocators.passwordField);
        },

        loginButton: () => {
            return cy.get(loginPageLocators.loginButton);
        },

        error: () => {
            return cy.get(loginPageLocators.error);
        }
    }

    enterUsername(username) {
        this.elements.username().clear().type(username);
    }

    enterPassword(password) {
        this.elements.password().clear().type(password);
    }

    clickOnLoginButton() {
        this.elements.loginButton().click();
    }
}

export const loginPage = new LoginPage();