/// <reference types="cypress" />

describe('Intecept Demo', () => {

  it('Initial Validation', () => {
    cy.visit('https://buggy.justtestit.org/');
    cy.get('[name="login"]').type('alexam045')
    cy.get('[name="password"]').type('Iansamuel.2410')
    cy.get('.btn-success').click();
    cy.get(':nth-child(2) > .card > .card-block > h3 > small').should('contain.text', '2786')

   });

   it('Mocked API Response', () => {
    cy.fixture('interceptFixtures.json').then((mockedResponse) => {

      cy.intercept('GET', 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users/current', {
        statusCode: 200,
        body: mockedResponse 
    }).as('GetBuggyCars-Fixture')
    cy.visit('https://buggy.justtestit.org');
      cy.log('test')
    })
   });
});
