/// <reference types="cypress" />

//import homeSaucePage from '../../pages/homeSaucePage.js'
const homeSaucePage = require ('../../pages/homeSaucePageXpath.js')

import inventoryPage from '../../pages/inventoryPage.js'
import homeSaucePageXpath from '../../../pages/homeSaucePageXpath.js';

const test = require('../fixtures/sauceUsers.json')

describe('Home sauce Demo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/')

  }); 

  test.forEach(test => {
    it(test.name, () => {
      homeSaucePage.typeUsername(test.username);
      homeSaucePage.typePassword(test.password);
      homeSaucePage.clickLogin();

      if(test.name === 'should login to inventory page'){
        inventoryPage.element.titleSpan().should('have.text', test.expected)
      }else{
        
      }
    })
    
  });

})