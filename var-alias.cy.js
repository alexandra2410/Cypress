///  <reference types="cypress" />

describe('Variables y Alias', () => {

  beforeEach(function(){
    cy.visit('https://practice-automation.com/modals/')
  })

  it('Funcionamiento de Variables Al Retornar Valor', () => {
    cy.get('#simpleModal').then($modalbutton => {
      const simpleModal = $modalbutton.text();
      cy.log(simpleModal)
    })

    cy.get('#simpleModal').click({force: false});
        cy.get('#pum_popup_title_1318')
  })
  it('Alias', function(){
    cy.get('#simpleModal').invoke('text').as('InvokeText')

    cy.get('#simpleModal').then($modalbutton => {
      const simpleModal = $modalbutton.text();
      cy.log(simpleModal)

      cy.wrap(simpleModal).as('WrapText')


  })
  it('Share Context', function(){
    cy.log(this.InvokeText)
    cy.log(this.WrapText)

   })
  })
});
