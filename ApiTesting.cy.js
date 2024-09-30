/// <reference types="cypress" />

const endPoint = 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/oauth/token'

const BuggyObject = {

                       'grant_type': 'password',
                       'username': 'alexam047',
                      'password': 'Iansamuel.2410'

                      }
                
const addBuggy = BuggyObject => {
  cy.request('POST', endPoint, BuggyObject)
}

describe('API Testing Demo', () => {

  it('ADD Buggy', () => {
    addBuggy(BuggyObject)

    cy.request({
      
      'method': 'GET',
      'url': `$(endPoint)/$(BuggyObject.id)`
     }).its('body').should('deep.eq', BuggyObject)

  })

})