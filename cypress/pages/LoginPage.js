/**
 * LoginPage class encapsulates the selectors and interactions with the login page of the application.
 * It provides methods to perform login actions using credentials stored in environment variables.
 * This class follows the Page Object Model (POM) design pattern, making it easier to maintain and reuse login-related code across tests.
 */
class LoginPage {

    get emailInput() { return cy.get('#user_email'); }
    get passwordInput() { return cy.get('#user_password'); }
    get submitButton() { return cy.get('#submitBtn'); }

    login() {
        const email = Cypress.env('LOGIN_EMAIL');
        const password = Cypress.env('LOGIN_PASSWORD');

        if (!email || !password) {
            throw new Error('Login credentials must be set in the .env file');
        }
        
        cy.visit('/');
        
    // At this point we're already on account.simplepractice.com — interact directly
    this.emailInput.should('be.visible').type(email);

    this.passwordInput.should('be.visible').type(password, { log: false });

    this.submitButton.should('be.visible').click();

    // Wait until we're redirected back to the main app
    cy.url().should('include', 'secure.simplepractice.com', { timeout: 15000 });
  }
}

module.exports = new LoginPage();