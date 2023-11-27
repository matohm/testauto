export default {
  firstName : () => cy.get('input[aria-labelledby="i1"]'),
  lastName : () => cy.get('input[aria-labelledby="i5"]'),
  birthDate: () => cy.get('input[aria-labelledby="i13"]'),
  nextButton: () => cy.get('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd'),
  
  /** @param fitForWork should be Ja or Nej */
  selectFitForWork(fitForWork : string)  {
    cy.get('.KKjvXb > .vRMGwf').click(); 
    cy.get(`div[data-value=${fitForWork}]:visible`).click();
  },

  verifyMandatoryFieldTextVisible() {
    cy.get(".RHiWt").should('be.visible');
  }
}