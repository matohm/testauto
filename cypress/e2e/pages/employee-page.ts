export default {
  firstName : () => cy.get('input[aria-labelledby="i1"]'),
  lastName : () => cy.get('input[aria-labelledby="i5"]'),
  birthDate: () => cy.get('input[aria-labelledby="i13"]'),
    
  selectFitForWork(fitForWork : string)  {
    cy.get('.KKjvXb > .vRMGwf').click(); 
    if (fitForWork == "Ja") {
      cy.get("div[data-value=Ja]:visible").click();
    } else if (fitForWork == "Nej") {
      cy.get("div[data-value=Nej]:visible").click();
    }
  },

  verifyMandatoryFieldTextVisible() {
    cy.get(".RHiWt").should('be.visible');
  },

  clickNext() {
    cy.get('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd').click();
  }
}