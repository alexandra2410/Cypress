describe('Location Demo', ()=>{

  beforeEach(()=>{
    cy.visit('https://www.saucedemo.com/v1/')
  }); 

  it('Should have title Swag Labs', () => {
    cy.title().should('eq', 'Swag Labs')
  })

  it('URL should be https://www.saucedemo.com/v1/', ()=> {
    cy.url().should('eq', 'https://www.saucedemo.com/v1/')
  })

  it('Should be https', ()=>{
    cy.location('protocol').should('contains', 'https')
  });

  it('Should have hostname www.saucedemo.com', ()=>{
    cy.location('hostname').should('eq', 'www.saucedemo.com')
  })
  it('Should redirect to /inventory', ()=>{
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[id="login-button"]').click();

    cy.location('pathname').should('eq', '/v1/inventory.html')
  })
});