/// <reference types="cypress" />

describe('Cypress Browser Demo', () => {

    it('Browser Propierties', () => {
       
        cy.visit('https://www.whatismybrowser.com/')

        if(Cypress.browser.name === 'chrome'){
            cy.get('.string-major').should('have.text', 'Chrome 129 en Windows 10')
        }else if(Cypress.browser.name === 'firefox')
            cy.get('.string-major').should('have.text', 'Firefox 130 on Windows 10')
    })

})
