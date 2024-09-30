/// <reference types="cypress" />

describe('Cypress Keyboard Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    })
  
    it('Slow Speed Typing', {keystrokeDelay: 150}, () => {
        cy.get('#user-name').type('test demo for typing')
    })
    it('Standar Speed Typing', () => {
        cy.get('#user-name').type('test demo for typing')
    })
    it('Fastest Speed Typing', {keystrokeDelay: 0}, () => {
        cy.get('#user-name').type('test demo for typing')
    })
  })