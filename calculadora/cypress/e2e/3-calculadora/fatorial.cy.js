describe('testando função ímpar', () => {
  beforeEach(() =>{
  cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })
  
  it('fatorial de 2', () => {
  cy.get('#num3').type('2')
  cy.get('#fatorial').click()
  cy.get('#resultado').should('have.text', '2')
  })
  
  it('fatorial de 3', () => {
  cy.get('#num3').type('3')
  cy.get('#fatorial').click()
  cy.get('#resultado').should('have.text', '6')
  })
  
  it('fatorial de 7', () => {
  cy.get('#num3').type('7')
  cy.get('#fatorial').click()
  cy.get('#resultado').should('have.text', '5040')
  })
  
  it('fatorial de 11', () => {
  cy.get('#num3').type('11')
  cy.get('#fatorial').click()
  cy.get('#resultado').should('have.text', '39916800')
  })
  
  it('fatorial de 13', () => {
  cy.get('#num3').type('13')
  cy.get('#fatorial').click()
  cy.get('#resultado').should('have.text', '6227020800')
  })
})