// Code from Real World App (RWA)
describe('Cypress Studio Demo', () => {
  beforeEach(() => {
    // Seed database with test data
    cy.visit('https://practice-automation.com/form-fields/')

  })

  it('create new transaction', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="drink3"]').check();
    cy.get('[data-cy="color2"]').check();
    cy.get('[data-cy="automation"]').select('yes');
    cy.get('[data-cy="name-input"]').clear('y');
    cy.get('[data-cy="name-input"]').type('yuly');
    cy.get(':nth-child(3) > input').clear('ma');
    cy.get(':nth-child(3) > input').type('martinez');
    /* ==== End Cypress Studio ==== */
  })
})
