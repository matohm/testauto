export default {
  personalNumber : () => cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  fromDate : () =>  cy.get('.o7cIKf > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  reason : () => cy.get(':nth-child(4) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd'),
  nextButton : () => cy.get('[jsname="OCpkoe"] > .l4V7wb > .NPEfkd'),

  personalNumberAlertText : () => cy.get("#i3 > .RHiWt"),
  fromDateAlertText : () => cy.get("#i7 > .RHiWt"),
}