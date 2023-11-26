export default {
  
  verifyConfirmationText(confirmationText: string)  {
    return cy.get('.vHW8K').should('have.text', confirmationText);
  },

  clickSendAnother() {
    cy.get('.c2gzEf > a').click(); 
  }
}