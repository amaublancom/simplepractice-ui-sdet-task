const LoginPage = require('../pages/LoginPage');

// Reusable login command. Sourced from Page Object to keep logic centralized.
Cypress.Commands.add('login', () => {
    LoginPage.login();
});