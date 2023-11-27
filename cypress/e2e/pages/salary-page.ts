export default {
  personalNumber : () => cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  newSalary : () => cy.get(':nth-child(3) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  newSalaryFromDate : () => cy.get('.o7cIKf > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  validationText : () => cy.get(".RHiWt"),
  sendButton : () => cy.get('.Y5sE8d > .l4V7wb > .NPEfkd'),

  selectFitForWork(fitForWork: boolean) {
    if (fitForWork) {
      cy.get('.uHMk6b').click();
    }  
  },

  verifyNoValidationTextExists(){
    this.validationText().should('not.exist');
  },

  verifyValidationText(alertText: string){
    this.validationText().should('have.text', alertText);
  },

  verifyMandatoryFieldValidationText(){
    this.verifyValidationText('Det här är en obligatorisk fråga');
  }
}

