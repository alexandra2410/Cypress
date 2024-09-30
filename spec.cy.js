describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

"cypress:runDefault": "npx cypress run --spec 'cypress/e2e/Retry-Ability.cy.js'--headed"
"cy:runFirefox": "npx cypress run 'cypres/e2e/Retry-Ability.cy.js' --headed --browser firefox", 
      "cy:runFirefoxHeadless": "npx cypress run 'cypres/e2e/Retry-Ability.cy.js' --headless --browser firefox"
  

