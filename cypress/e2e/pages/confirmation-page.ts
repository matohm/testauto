export default {
  sendAnotherButton: () => cy.get('.c2gzEf > a'),

  verifyConfirmationText(confirmationText: string)  {
    return cy.get('.vHW8K').should('have.text', confirmationText);
  }
}