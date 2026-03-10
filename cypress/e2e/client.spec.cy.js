/**
 * Test Suite: SimplePractice Client Happy Path
 *
 * Covers:
 *  1. Login with valid credentials
 *  2. Create a new client using the + menu (minimum required data)
 *  3. Navigate to the Clients page via left nav
 *  4. Search and verify the newly created client appears in the list
 *
 * Data strategy: Client name is generated with a timestamp suffix to ensure
 * uniqueness across parallel runs and shared test environments.
 *
 * Security: Credentials are never hardcoded — they are loaded from .env
 * via cypress.config.js and accessed through Cypress.env().
 */

const clienData = require('../fixtures/clientData');
const ClientsPage = require('../pages/ClientsPage');
const DashboardPage = require('../pages/DashboardPage');
const NewClientPage = require('../pages/NewClientPage');

describe('Client Management - Happy Path', () => {

  before(() => {
    cy.login();
  });

  it('Create a new client and verify it exists in the clients list', () => {
    const {firstName, lastName, fullName} = clienData;

    DashboardPage.openNewClientForm();

    NewClientPage.createClient(firstName, lastName, 'active');

    ClientsPage.navigateToClientsPage();

    ClientsPage.verifyClientExists(fullName);
    
  })
})