import startPage from "../pages/start-page";
import employeePage from "../pages/employee-page";

describe('Employee page validations', () => {
  it('Mandatory field validations', function() {
    cy.visitForm();
    startPage.nextButton().click();

    // Skip fit for work
    employeePage.firstName().type('Mattias');
    employeePage.lastName().type('Matsson');
    employeePage.birthDate().type('1912-12-12');
    employeePage.nextButton().click();
    employeePage.fitForWorkAlertText().should('have.text', 'Det här är en obligatorisk fråga');
    employeePage.selectFitForWork('Ja');

    // Skip first name
    employeePage.firstName().click().clear();
    employeePage.nextButton().click();
    employeePage.firstNameAlertText().should('have.text', 'Det här är en obligatorisk fråga');
    employeePage.firstName().type('Mattias');

    // Skip last name
    employeePage.lastName().click().clear();
    employeePage.nextButton().click();
    employeePage.lastNameAlertText().should('have.text', 'Det här är en obligatorisk fråga');
    employeePage.lastName().type('Matsson');

    // Skip birth date
    employeePage.birthDate().click().clear();
    employeePage.nextButton().click();
    employeePage.birthDateAlertText().should('have.text', 'Det här är en obligatorisk fråga');
  });
});