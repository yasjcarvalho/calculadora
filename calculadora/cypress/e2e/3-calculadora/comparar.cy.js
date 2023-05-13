describe('testando função comparar', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('comparar de 20 e 40', () => {
    cy.get('#num1').type('20')
    cy.get('#num2').type('40')
    cy.get('#comparar').click()
    cy.get('#resultado').should('have.text', 'menor')
  })

  it('comparar de 2 e 2', () => {
    cy.get('#num1').type('2')
    cy.get('#num2').type('2')
    cy.get('#comparar').click()
    cy.get('#resultado').should('have.text', 'igual')
  })

  it('comparar de 2.1 e 2.1', () => {
    cy.get('#num1').type('2.1')
    cy.get('#num2').type('2.1')
    cy.get('#comparar').click()
    cy.get('#resultado').should('have.text', 'igual')
  })

  it('comparar de -7 e -8', () => {
    cy.get('#num1').type('-7')
    cy.get('#num2').type('-7')
    cy.get('#comparar').click()
    cy.get('#resultado').should('have.text', 'menor')
  })

  it('comparar de -30 e -30', () => {
    cy.get('#num1').type('-30')
    cy.get('#num2').type('-30')
    cy.get('#comparar').click()
    cy.get('#resultado').should('have.text', 'igual')
  })
})
