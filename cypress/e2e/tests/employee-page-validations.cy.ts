import startPage from "../pages/start-page";
import employeePage from "../pages/employee-page";

describe.skip('Employee page validations', () => {
  it('Mandatory field validations', function() {
    cy.visitForm();
    startPage.clickNext();

    // Skip fit for work
    employeePage.firstName().type('Mattias');
    employeePage.lastName().type('Matsson');
    employeePage.birthDate().type('1912-12-12');
    employeePage.clickNext();
    employeePage.verifyMandatoryFieldTextVisible();
    employeePage.selectFitForWork('Ja');

    // Skip first name
    employeePage.firstName().click().clear();
    employeePage.clickNext();
    employeePage.verifyMandatoryFieldTextVisible();
    employeePage.firstName().type('Mattias');

    // Skip last name
    employeePage.lastName().click().clear();
    employeePage.clickNext();
    employeePage.verifyMandatoryFieldTextVisible();
    employeePage.lastName().type('Matsson');

    // Skip birth date
    employeePage.birthDate().click().clear();
    employeePage.clickNext();
    employeePage.verifyMandatoryFieldTextVisible();
  });
});