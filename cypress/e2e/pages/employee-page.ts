export default {
  firstName : () => cy.get('input[aria-labelledby="i1"]'),
  lastName : () => cy.get('input[aria-labelledby="i5"]'),
  birthDate: () => cy.get('input[aria-labelledby="i13"]'),
  nextButton: () => cy.get('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd'),
  
  firstNameAlertText : () => cy.get("#i3 > .RHiWt"),
  lastNameAlertText : () => cy.get("#i7 > .RHiWt"),
  birthDateAlertText : () => cy.get("#i11 > .RHiWt"),
  fitForWorkAlertText : () => cy.get("#i16 > .RHiWt"),

  /** @param fitForWork should be Ja or Nej */
  selectFitForWork(fitForWork : string)  {
    cy.get('.KKjvXb > .vRMGwf').click(); 
    cy.get(`div[data-value=${fitForWork}]:visible`).click();
  },
}