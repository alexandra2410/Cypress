///  <reference types="cypress" />

describe('ASSERTIONS DEMO', () => {

  it('TDD ASSERTIONS', () => {
    cy.visit('https://practice-automation.com/form-fields/')

    cy.log('LEGTH CHECK')
    cy.get('input[name="fav_drink"]').should('have.length', 5)

    cy.log('CLASS CHECK')
    cy.get('input[type="checkbox"]').eq(2).should('have.value', 'Coffee')

    cy.log('TEXT CHECK')
    cy.get('input[type="checkbox"]').eq(2).click({force: false})

    cy.get('.red_txt').should('have.css', 'color', 'rgb(255, 0, 0)')

    })
    it('BDD ASSERTIONS', () => {
      cy.log('CLASS Y LENGTH')
      cy.get('input[type="checkbox"]').should($input => {
        expect($input).to.have.lengthOf(5)
        expect($input).to.have.class('Coffee')

      })
    })

  })