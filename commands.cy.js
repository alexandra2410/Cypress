/// <reference types="cypress" />

describe('Commands Example', function(){

  beforeEach(function(){
    cy.visit('https://www.saucedemo.com/v1/')
    
  })
  it('Test', function(){
    cy.log('Test');
    cy.typelogin('standard_user','secret_sauce')
    cy.get('.product_label').should('contain.text','Products')
    cy.logout();
    cy.url().should('eq','https://www.saucedemo.com/v1/index.html')
  })
  it('Failed Login Test', function(){
    cy.typelogin('standard_user','dummyPassword')
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
  })
})