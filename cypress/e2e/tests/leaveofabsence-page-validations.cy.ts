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
})

describe('Leave of absence page validations', () => {
  it('Input value validation', function() {
    // Personal number invalid: One character too short
    leaveOfAbsencePage.personalNumber().type('19121212121');
    leaveOfAbsencePage.reason().click();
    leaveOfAbsencePage.verifyValidationText('Felaktigt personnummer');
    leaveOfAbsencePage.personalNumber().click().clear();

    // Personal number invalid: One character too long
    leaveOfAbsencePage.personalNumber().type('1912121212121');
    leaveOfAbsencePage.reason().click();
    salaryPage.verifyValidationText('Felaktigt personnummer');
    leaveOfAbsencePage.personalNumber().click().clear();

    // Personal number invalid: Non-number character
    leaveOfAbsencePage.personalNumber().type('19121212121B');
    leaveOfAbsencePage.reason().click();
    leaveOfAbsencePage.verifyValidationText('Felaktigt personnummer');
    leaveOfAbsencePage.personalNumber().click().clear();

    // Personal number Ok: YYYYMMDDXXXX
    leaveOfAbsencePage.personalNumber().type('191212121212');
    leaveOfAbsencePage.reason().click();
    leaveOfAbsencePage.verifyNoValidationTextExists();
    salaryPage.personalNumber().click().clear();

    // Personal number Ok: YYYYMMDD-XXXX
    leaveOfAbsencePage.personalNumber().type('19121212-1212');
    leaveOfAbsencePage.reason().click();
    leaveOfAbsencePage.verifyNoValidationTextExists();
  });

  it('Mandatory field validations', function() {
    // Skip personal number
    leaveOfAbsencePage.fromDate().type('2024-01-01');
    leaveOfAbsencePage.clickNext();
    leaveOfAbsencePage.verifyValidationText('Det här är en obligatorisk fråga');
    leaveOfAbsencePage.personalNumber().type('191212121212');

    // Skip from date
    leaveOfAbsencePage.fromDate().click().clear();
    leaveOfAbsencePage.clickNext();
    leaveOfAbsencePage.verifyValidationText('Det här är en obligatorisk fråga');
  });
});