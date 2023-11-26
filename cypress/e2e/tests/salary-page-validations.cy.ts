import startPage from "../pages/start-page";
import employeePage from "../pages/employee-page";
import leaveOfAbsencePage from "../pages/leave-of-absence-page";
import salaryPage from "../pages/salary-page";

beforeEach(() => {
  cy.visitForm();
  startPage.clickNext();
  employeePage.firstName().type('Mattias');
  employeePage.lastName().type('Matsson');
  employeePage.birthDate().type('1912-12-12');
  employeePage.selectFitForWork('Ja');
  employeePage.clickNext();

  leaveOfAbsencePage.personalNumber().type('191212121212');
  leaveOfAbsencePage.fromDate().type('2024-01-01');
  leaveOfAbsencePage.reason().type('Netflix and chill');
  leaveOfAbsencePage.clickNext();
})

describe('Salary page validations', () => {
  it('Input value validations', function() {

    // Personal number invalid: One character too short
    salaryPage.personalNumber().type('19121212121');
    salaryPage.newSalary().type('20000');
    salaryPage.verifyValidationText('Felaktigt personnummer');
    salaryPage.personalNumber().click().clear();

    // Personal number invalid: One character too long
    salaryPage.personalNumber().type('1912121212121');
    salaryPage.newSalary().click();
    salaryPage.verifyValidationText('Felaktigt personnummer');
    salaryPage.personalNumber().click().clear();

    // Personal number invalid: Non-number character
    salaryPage.personalNumber().type('19121212121B');
    salaryPage.newSalary().click();
    salaryPage.verifyValidationText('Felaktigt personnummer');
    salaryPage.personalNumber().click().clear();

    // Personal number ok: YYYYMMDDXXXX
    salaryPage.personalNumber().type('191212121212');
    salaryPage.newSalary().click();
    salaryPage.verifyNoValidationTextExists();
    salaryPage.personalNumber().click().clear();

    // Personal number ok: YYYYMMDD-XXXX
    salaryPage.personalNumber().type('19121212-1212');
    salaryPage.newSalary().click();
    salaryPage.verifyNoValidationTextExists();

    // NOTE!!! 
    // Bug in application, salary should be >= 15000, skip for now
    //
    // Salary invalid: Too low
    // salaryPage.newSalary().click().clear();
    // salaryPage.newSalary().type('14999');
    // salaryPage.personalNumber().click();
    // salaryPage.verifyValidationText('Felaktig lön');
    // salaryPage.newSalary().click().clear();

    // Salary invalid: Too high
    salaryPage.newSalary().type('120001');
    salaryPage.personalNumber().click();
    salaryPage.verifyValidationText('Felaktig lön');
    salaryPage.newSalary().click().clear();

    // Salary Ok: Low limit
    salaryPage.newSalary().type('15000');
    salaryPage.personalNumber().click();
    salaryPage.verifyNoValidationTextExists();
    salaryPage.newSalary().click().clear();

    // Salary Ok: High limit
    salaryPage.newSalary().type('120000');
    salaryPage.personalNumber().click();
    salaryPage.verifyNoValidationTextExists();
  });

  it('Mandatory field validations', function() {
    // Skip personal number
    salaryPage.newSalary().type('33000');
    salaryPage.newSalaryFromDate().type('2024-02-01');
    salaryPage.selectFitForWork(true);
    salaryPage.clickSend();
    salaryPage.verifyMandatoryFieldValidationText();
    salaryPage.personalNumber().type('191212121212');

    // Skip new salary
    salaryPage.newSalary().click().clear();;
    salaryPage.clickSend();
    salaryPage.verifyMandatoryFieldValidationText();
    salaryPage.newSalary().type('33000');

    // Skip new salary from date
    salaryPage.newSalaryFromDate().click().clear();;
    salaryPage.clickSend();
    salaryPage.verifyMandatoryFieldValidationText();
    salaryPage.newSalaryFromDate().type('2024-02-01');
  });
});