describe('testando função par', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('é par 81', () => {
    cy.get('#num3').type('81')
    cy.get('#par').click()
    cy.get('#resultado').should('have.text', 'não é par')
  })

  it('é par 2', () => {
    cy.get('#num3').type('2')
    cy.get('#par').click()
    cy.get('#resultado').should('have.text', 'é par')
  })

  it('é par 0', () => {
    cy.get('#num3').type('0')
    cy.get('#par').click()
    cy.get('#resultado').should('have.text', 'é par')
  })

  it('é par 100', () => {
    cy.get('#num3').type('100')
    cy.get('#par').click()
    cy.get('#resultado').should('have.text', 'é par')
  })

  it('é par 4', () => {
    cy.get('#num3').type('4')
    cy.get('#par').click()
    cy.get('#resultado').should('have.text', 'é par')
  })
})
