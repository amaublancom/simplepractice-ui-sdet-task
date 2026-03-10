/**
 * DashboardPage class encapsulates the selectors and interactions with the dashboard page of the application.
 * It provides methods to perform actions related to the dashboard, such as opening the new client form.
 * This class follows the Page Object Model (POM) design pattern, making it easier to maintain and reuse dashboard-related code across tests.
 */
class DashboardPage {

    static SELECTORS = {
        createMenuButton: 'button[aria-label="create"]',
        createClientButton: 'button:contains("Create client")'
    };

    openNewClientForm() {
        const { createMenuButton, createClientButton } = DashboardPage.SELECTORS;
        
        cy.origin('https://secure.simplepractice.com',
        { args: { createMenuButton, createClientButton } },
        ({ createMenuButton, createClientButton }) => {
            cy.get(createMenuButton).should('be.visible').click();  
            cy.get(createClientButton).should('be.visible').click();  
        });
    }
}

module.exports = new DashboardPage();