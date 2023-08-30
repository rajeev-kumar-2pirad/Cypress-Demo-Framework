class HomePage {
    elements: any = {
        deltaLogo: () => cy.get("svg.logo"),
        loginBtn: () => cy.get(".login-button"),
        tracking: () => cy.get("a[href='/tracking']"),
        pbtAssociation: () => cy.get("a[href='/association']"),
        pbtAssignment: () => cy.get("a[href='/assignment']"),
    }

    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }

    typePassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }
}

export default new HomePage();