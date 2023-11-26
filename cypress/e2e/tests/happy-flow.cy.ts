import startPage from "../pages/start-page";
import employeePage from "../pages/employee-page";
import leaveOfAbsencePage from "../pages/leave-of-absence-page";
import salaryPage from "../pages/salary-page";
import confirmationPage from "../pages/confirmation-page";

describe('Happy flow test', () => {
  it('Happy flow', function() {
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

    salaryPage.personalNumber().type('191212121212');
    salaryPage.newSalary().type('33000');
    salaryPage.newSalaryFromDate().type('2024-02-01');
    salaryPage.selectFitForWork(true);
    salaryPage.clickSend();

    confirmationPage.verifyConfirmationText('Ditt svar är registrerat.');
    confirmationPage.clickSendAnother();
  });
});