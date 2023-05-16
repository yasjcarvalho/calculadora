describe('testando função número primo', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('7 é primo?', () => {
    cy.get('#num3').type('7')
    cy.get('#primo').click()
    cy.get('#resultado').should('have.text', 'true')
  })

  it('0 é primo?', () => {
    cy.get('#num3').type('0')
    cy.get('#primo').click()
    cy.get('#resultado').should('have.text', 'false')
  })

  it('2 é primo?', () => {
    cy.get('#num3').type('2')
    cy.get('#primo').click()
    cy.get('#resultado').should('have.text', 'true')
  })

  it('1 é primo?', () => {
    cy.get('#num3').type('0')
    cy.get('#primo').click()
    cy.get('#resultado').should('have.text', 'false')
  })

  it('3 é primo?', () => {
    cy.get('#num3').type('3')
    cy.get('#primo').click()
    cy.get('#resultado').should('have.text', 'true')
  })
})
