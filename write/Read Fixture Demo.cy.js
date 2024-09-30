/// <reference types="cypress" />

describe('Write/Read Fixture Demo', () => {

  const filePath = 'cypress/fixtures/read-write.json'

  it('Agregar la respuest de un API a un Json', () => {
    cy.request('GET', 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/dashboard')
    .then((response)=>{
      cy.log(response.body)
      cy.writeFile(filePath, response.body)
    })
    it('Leer el File', () => {
      cy.readFile(filePath).then((array) => {
        array.push(objeto)

        cy.writeFile(filePath, array)

      })

    })

  })

});

  