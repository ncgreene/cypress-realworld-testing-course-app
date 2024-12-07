describe('Newsletter Subscribe Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('allows users to subscribe to email list', () => {
    cy.getByData('email-input').type('nathan@test.com');
    cy.getByData('submit-button').click();
    cy.getByData('success-message').should('exist').contains('nathan@test.com');
  });

  it('does now allow an invalid email address', () => {
    cy.getByData('email-input').type('nathan');
    cy.getByData('submit-button').click();
    cy.getByData('success-message').should('not.exist');
  })

  it('does now allow an already subscribed email to subscribe again', () => {
    cy.getByData('email-input').type('john@example.com');
    cy.getByData('submit-button').click();
    cy.getByData('server-error-message').should('exist').contains('john@example.com already exists');
  })
})