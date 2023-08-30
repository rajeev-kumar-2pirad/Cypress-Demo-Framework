import homePage from '../pages/home.page';

describe('Validate home page content of PBT application', function () {

    beforeEach(function () {
        cy.visit(Cypress.config('baseUrl'));
    })

    it('Validate presence of logo and other links in NAV bar on landing page', function () {
        homePage.elements.deltaLogo().should('be.visible');
        homePage.elements.loginBtn().should('have.text', 'LOGIN');
        homePage.elements.tracking().should('have.text', 'Tracking');
        homePage.elements.pbtAssociation().should('have.text', 'PBT-Association');
        homePage.elements.pbtAssignment().should('have.text', 'PBT-Assignment');
    })

    it('Validate Tracking link functionality in NAV bar on landing page', function () {
        homePage.elements.tracking().click();
        cy.url().should('contain', '/tracking');
    })

    it('Validate PBT-Association link functionality in NAV bar on landing page', function () {
        homePage.elements.pbtAssociation().click();
        cy.url().should('contain', '/association');
    })

    it('Validate PBT-Assignment link functionality in NAV bar on landing page', function () {
        homePage.elements.pbtAssignment().click();
        cy.url().should('contain', '/assignment');
    })
})