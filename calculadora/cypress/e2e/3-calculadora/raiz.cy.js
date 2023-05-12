describe('testando função raiz', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/calculadora/calculadora.html')
  })

  it('raiz de 80', () => {
    cy.get('#num3').type('80')
    cy.get('#raizQuadrada').click()
    cy.get('#resultado').should('have.text', '8.94')
  })

  it('raiz de 9', () => {
    cy.get('#num3').type('9')
    cy.get('#raizQuadrada').click()
    cy.get('#resultado').should('have.text', '3.00')
  })

  it('raiz de 20', () => {
    cy.get('#num3').type('20')
    cy.get('#raizQuadrada').click()
    cy.get('#resultado').should('have.text', '4.47')
  })

  it('raiz de 2000', () => {
    cy.get('#num3').type('2000')
    cy.get('#raizQuadrada').click()
    cy.get('#resultado').should('have.text', '44.72')
  })

  it('raiz de 169', () => {
    cy.get('#num3').type('169')
    cy.get('#raizQuadrada').click()
    cy.get('#resultado').should('have.text', '13.00')
  })
})
