// Hooks -> Mocha 

/* 
1. Before() -> UNA VEZ, al principio 
2. BeforeEach() -> Antes de cada test 
3. TEST EXECTUION 
4. AfterEach() -> Despues de cada test 
5. After() -> UNA VEZ, al final 
*/

//Skips- Only


describe('Demo de hooks', function(){
  before(function(){
    cy.log('Before');

  })
  beforeEach(function(){
    cy.log('Before Each'); 
  })
  it('shold be test #1', function (){
    console.log('test #1')
  })
  it.only('shold be test #2', function (){
    console.log('test #2')
  })
  it('shold be test #3', function (){
    console.log('test #3')
  })
  afterEach(function(){
    cy.log('After Each')
  })
  after(function(){
    cy.log('After')
  })
})
