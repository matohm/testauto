
declare namespace Cypress {
    interface Chainable {
        visitForm: () => void;
    }
}

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScWINEF6sSy0W_-TK8fszx7g5vgPQvrTnaL-9Sl5ZXPdjVZXg/viewform';

Cypress.Commands.add('visitForm', () => {
    cy.visit(FORM_URL)
})