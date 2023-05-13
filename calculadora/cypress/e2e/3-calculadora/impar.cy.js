describe('testando função ímpar', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('é impar 2', () => {
    cy.get('#num3').type('2')
    cy.get('#impar').click()
    cy.get('#resultado').should('have.text', 'não é ímpar')
  })

  it('é par 3', () => {
    cy.get('#num3').type('3')
    cy.get('#impar').click()
    cy.get('#resultado').should('have.text', 'é ímpar')
  })

  it('é par 7', () => {
    cy.get('#num3').type('7')
    cy.get('#impar').click()
    cy.get('#resultado').should('have.text', 'é ímpar')
  })

  it('é par 11', () => {
    cy.get('#num3').type('11')
    cy.get('#impar').click()
    cy.get('#resultado').should('have.text', 'é ímpar')
  })

  it('é par 13', () => {
    cy.get('#num3').type('13')
    cy.get('#impar').click()
    cy.get('#resultado').should('have.text', 'é ímpar')
  })
})
