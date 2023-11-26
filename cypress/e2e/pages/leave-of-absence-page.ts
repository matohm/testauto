export default {
  personalNumber : () => cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  fromDate : () =>  cy.get('.o7cIKf > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  reason : () => cy.get(':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),

  clickNext() {
    cy.get('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd').click();
  },

  verifyValidationText(alertText: string){
    cy.get(".RHiWt").should('have.text', alertText);
  },

  verifyNoValidationTextExists(){
    cy.get(".RHiWt").should('not.exist');
  },
  
}




