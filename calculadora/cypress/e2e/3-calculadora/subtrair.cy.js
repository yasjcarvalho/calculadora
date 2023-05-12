describe('testando função subtração', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('subtração de 5 - 3', () => {
    cy.get('#num1').type('5')
    cy.get('#num2').type('3')
    cy.get('#subtrair').click()
    cy.get('#resultado').should('have.text', '2')
  })

  it('subtração de 30 -40', () => {
    cy.get('#num1').type('30')
    cy.get('#num2').type('40')
    cy.get('#subtrair').click()
    cy.get('#resultado').should('have.text', '-10')
  })

  it('subtração de 6 -6', () => {
    cy.get('#num1').type('6')
    cy.get('#num2').type('6')
    cy.get('#subtrair').click()
    cy.get('#resultado').should('have.text', '0')
  })
})
