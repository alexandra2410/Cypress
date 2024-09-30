/// <reference types="cypress" />

describe('Cypress Dom Demo', () => {

    it('Acordin test', function(){
        cy.visit('https://practice-automation.com/accordions/')
        cy.get('.wp-block-coblocks-accordion-item__title').click({force : false}).then($element =>{
            cy.log(`State of the dropdown as soon as I load the website`)
            Cypress.dom.isVisible($element)
        })
    })
})