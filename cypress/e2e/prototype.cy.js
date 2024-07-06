import json from "../../src/components/prototype/prototype.json"



describe('Prototype test', () => {
  it('should render each card', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.card').should('have.length', json.length)
  })
})