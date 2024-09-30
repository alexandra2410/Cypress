let username = "standard_user";
let password = "secret_sauce"; 

describe('Locators un Cypress', ()=>{

  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/v1/')
  })
  it('GET Method', ()=>{
    cy.get('#user-name').type(username); 
    cy.get('input#password').type(password); 
    cy.get('[id="login-button"]').click(); 
  })
  it('Eq|Fisrt|Last Method', ()=>{
    cy.get('input').first().type(username); 
    cy.get('input').eq(1).type(password);
    cy.get('input').last().click;
  })
  it('Filter Method',()=>{
    cy.get('input').filter('[type="text"]').type(username);
    cy.get('input').filter('[type="password"]').type(password);
    cy.get('input').filter('[type="submit"]').click;
  })
  it('Find Method',()=>{
    cy.get('form').find('input').eq(0).type(username);
    cy.get('form').find('input').eq(1).type(password);
    cy.get('form').find('input').last().click();
  });
  it('PARENT Method', ()=>{
    cy.get('form').parent().should('have.class', 'login-box')
  })
});