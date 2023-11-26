export default {
  personalNumber : () => cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  newSalary : () => cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  newSalaryFromDate : () => cy.get('.o7cIKf > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  
  selectFitForWork(fitForWork: boolean) {
    if (fitForWork) {
      cy.get('.uHMk6b').click();
    }  
  },

  verifyNoValidationTextExists(){
    cy.get(".RHiWt").should('not.exist');
  },

  verifyValidationText(alertText: string){
    cy.get(".RHiWt").should('have.text', alertText);
  },

  verifyMandatoryFieldValidationText(){
    cy.get(".RHiWt").should('have.text', 'Det här är en obligatorisk fråga');
  },

  clickSend() {
    cy.get('.Y5sE8d > .l4V7wb > .NPEfkd').click();
  }
}

