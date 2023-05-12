describe('testando função exponenciação', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('subtração de 3 ^ 0', () => {
    cy.get('#num1').type('3')
    cy.get('#num2').type('0')
    cy.get('#exponenciacao').click()
    cy.get('#resultado').should('have.text', '1')
  })

  it('subtração de 25 ^ 2', () => {
    cy.get('#num1').type('25')
    cy.get('#num2').type('2')
    cy.get('#exponenciacao').click()
    cy.get('#resultado').should('have.text', '625')
  })

  it('subtração de 6^3', () => {
    cy.get('#num1').type('6')
    cy.get('#num2').type('3')
    cy.get('#exponenciacao').click()
    cy.get('#resultado').should('have.text', '216')
  })

  it('subtração de 5 ^ 5', () => {
    cy.get('#num1').type('5')
    cy.get('#num2').type('5')
    cy.get('#exponenciacao').click()
    cy.get('#resultado').should('have.text', '3125')
  })

  it('subtração de 2 ^ 2', () => {
    cy.get('#num1').type('2')
    cy.get('#num2').type('2')
    cy.get('#exponenciacao').click()
    cy.get('#resultado').should('have.text', '4')
  })
})
