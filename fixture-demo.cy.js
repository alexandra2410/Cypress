/// load a fixed set data located in a file
/// <reference types="cypress" />

describe('Fixture Demo',() => {

  beforeEach(function()  {
    cy.visit('https://www.saucedemo.com/v1/')
    // Carga los datos del Fixture y los almacena en this
    cy.fixture('sauceCredential.json').then(function(credentials) {
      this.sauceCredential = credentials;
    });
  });

  it('Standard Username', function() {
    cy.get('[data-test="username"]').type(this.sauceCredential.standarUser); 
    cy.get('[data-test="password"]').type(this.sauceCredential.systemPassword); 
    cy.get('[id="login-button"]').click(); 

    cy.get('.product_label').should('contain.text','Products');

  });
  it('Incorrect Username', function(){
    cy.get('[data-test="username"]').type(this.sauceCredential.dummyUsername); 
    cy.get('[data-test="password"]').type(this.sauceCredential.systemPassword); 
    cy.get('[id="login-button"]').click(); 

    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
  })

  it('Locked Username', function(){
    cy.get('[data-test="username"]').type(this.sauceCredential.lockedUsername); 
    cy.get('[data-test="password"]').type(this.sauceCredential.systemPassword); 
    cy.get('[id="login-button"]').click(); 

    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.');

  })

  it('Incorrect Password', function(){
    cy.get('[data-test="username"]').type(this.sauceCredential.standarUser); 
    cy.get('[data-test="password"]').type(this.sauceCredential.dummyPassword); 
    cy.get('[id="login-button"]').click(); 

    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
  });

});

