describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
  })

  it('arithmetical operation should update display with result', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('arithmetical operation with negative should update display with result', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-6')
  })

  it('arithmetical operation with decimal should update display with result', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2.5')
  })

  it('arithmetical operation with large numbers should update display with result', () => {
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1250')
  })

  it('divide by decimal should update display with Infinity', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Infinity')
  })

})