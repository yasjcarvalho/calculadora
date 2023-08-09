describe('testando função multiplicação', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('multiplicar de 20 * 40', () => {
    cy.get('#num1').type('20')
    cy.get('#num2').type('40')
    cy.get('#mutiplicar').click()
    cy.get('#resultado').should('have.text', '800')
  })

  it('multiplicar de 2*(-2)', () => {
    cy.get('#num1').type('2')
    cy.get('#num2').type('-2')
    cy.get('#mutiplicar').click()
    cy.get('#resultado').should('have.text', '-4')
  })

  it('multiplicar de 0*40', () => {
    cy.get('#num1').type('0')
    cy.get('#num2').type('40')
    cy.get('#mutiplicar').click()
    cy.get('#resultado').should('have.text', '0')
  })

  it('multiplicar de 1*30', () => {
    cy.get('#num1').type('1')
    cy.get('#num2').type('30')
    cy.get('#mutiplicar').click()
    cy.get('#resultado').should('have.text', '30')
  })

  it('multiplicar de -30 *40', () => {
    cy.get('#num1').type('-30')
    cy.get('#num2').type('40')
    cy.get('#mutiplicar').click()
    cy.get('#resultado').should('have.text', '-1200')
  })
})
