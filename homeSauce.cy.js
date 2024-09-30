/// <reference types="cypress" />

import homeSaucePage from '../../pages/homeSaucePage'
import inventoryPage from '../../pages/inventoryPage'

describe('POM Implementation', ()=> {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/')
  })
  it('Should Login o inventory Page',() => {
    homeSaucePage.typeUsername('standard_user')
    homeSaucePage.typePassword('secret_sauce')
    homeSaucePage.clickLogin();

    inventoryPage.element.titleSpan().should('have.text', 'Products')
  })
  it('Should display locket ot message',() => {
    homeSaucePage.typeUsername('locked_out_user')
    homeSaucePage.typePassword('secret_sauce')
    homeSaucePage.clickLogin();

    homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    })
    it('Should display incorrect username message',() => {
      homeSaucePage.typeUsername('standard_user')
      homeSaucePage.typePassword('dummyPassword')
      homeSaucePage.clickLogin();
  
      homeSaucePage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
      })
});