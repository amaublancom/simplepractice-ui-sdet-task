class NewClientPage {

  static SELECTORS = {
    firstNameInput: 'input[name="firstName"]',
    lastNameInput: 'input[name="lastName"]',
    statusDropdown: 'button.spds-input-dropdown-list-trigger',
    statusProspectiveOption: '[data-value="prospective"]',
    continueButton: 'button:contains("Continue")',
    successToast: 'li.spds-feedback-toast-message.success'
  };

  static getStatusOption(status) {
    return `[data-value="${status}"]`;
  }

  createClient(firstName, lastName, status) {
    const { firstNameInput, lastNameInput, statusDropdown, continueButton, successToast } = NewClientPage.SELECTORS;
    const statusOption = NewClientPage.getStatusOption(status);
    cy.origin(
        'https://secure.simplepractice.com',
        { args: { firstName, lastName, firstNameInput, lastNameInput, statusDropdown, statusOption, continueButton, successToast } },
        ({ firstName, lastName, firstNameInput, lastNameInput, statusDropdown, statusOption, continueButton, successToast }) => {
            cy.get(firstNameInput).should('be.visible').clear().type(firstName);
            cy.get(lastNameInput).should('be.visible').clear().type(lastName);
            cy.contains(statusDropdown, 'Select').scrollIntoView().should('be.visible').click();
            cy.get(statusOption).should('be.visible').click();
            cy.get(continueButton).should('be.visible').click();
            cy.get(successToast).scrollIntoView().should('be.visible').and('contain', 'Client created');
        }
    );
  }
}

module.exports = new NewClientPage(); 