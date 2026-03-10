// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

/**
 * Suppress uncaught exceptions thrown by the application (not the test).
 * SimplePractice uses Ember.js which occasionally throws internal errors
 * (e.g. "Element attr did not return a valid number") that are unrelated
 * to the test flow and should not cause test failures.
 */
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('did not return a valid number')) {
    return false; // returning false prevents Cypress from failing the test
  }
});