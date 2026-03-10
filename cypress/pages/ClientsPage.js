/**
 * ClientsPage class encapsulates selectors and assertions for the Clients list page.
 * All interactions are wrapped in cy.origin() since the test session
 * originated on account.simplepractice.com (auth domain).
 */
class ClientsPage {
  static SELECTORS = {
    clientsNavLink: 'nav a:contains("Clients")',
    searchClientInput: 'input[name="utility-search"]',
    clientList: '[data-test-client-list-item]',
    clientRecord: 'a.record-name',
  };

  /**
   * Navigates to the Clients page via the left navigation menu.
   */
  navigateToClientsPage() {
    const { clientsNavLink, searchClientInput } = ClientsPage.SELECTORS;

    cy.origin(
      'https://secure.simplepractice.com',
      { args: { clientsNavLink, searchClientInput } },
      ({ clientsNavLink, searchClientInput }) => {
        cy.get(clientsNavLink).should('be.visible').click();
        cy.url().should('include', '/clients');
        cy.get(searchClientInput).should('be.visible');
      }
    );
  }

  /**
   * Asserts that a client with the given full name is visible in the list.
   * Types the full name into the search input to filter results before asserting.
   * @param {string} fullName - e.g. "AutoTest Client1709234567"
   */
  verifyClientExists(fullName) {
    const { searchClientInput, clientList, clientRecord } = ClientsPage.SELECTORS;

    cy.origin(
      'https://secure.simplepractice.com',
      { args: { fullName, searchClientInput, clientList, clientRecord } },
      ({ fullName, searchClientInput, clientList, clientRecord }) => {
        cy.get(searchClientInput).should('be.visible').type(fullName);
        cy.get(clientList).should('be.visible');
        cy.contains(clientRecord, fullName).should('be.visible');
      }
    );
  }
}

module.exports = new ClientsPage();