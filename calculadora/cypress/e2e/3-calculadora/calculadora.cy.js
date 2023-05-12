//<reference types="cypress" />

describe('testando função soma', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('soma de 3 + 5', () => {
    cy.get('#num1').type('3')
    cy.get('#num2').type('5')
    cy.get('#somar').click()
    cy.get('#resultado').should('have.text', '8')
  })

  it('soma de -1 + 1', () => {
    cy.get('#num1').type('-1')
    cy.get('#num2').type('1')
    cy.get('#somar').click()
    cy.get('#resultado').should('have.text', '0')
  })
})
