describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  context('Hero section', () => {
    it('the h1 contains correct text', () => {
      cy.getByData('hero-heading').contains('Testing Next.js Applications with Cypress');
    })

    /**
     * Ideally, we'd use data-* here, but that is
     * not always possible.
     */
    it('has correct homepage features', () => {
      cy.get('dt').eq(0).contains('4 Courses');
      cy.get('dt').eq(1).contains('25+ Lessons');
      cy.get('dt').eq(2).contains('Free and Open Source');
    })
  })

  context('Courses section', () => {
    it('Course: Testing your first next.js application', () => {
      cy.getByData('course-0').find('a').contains('Get started').click();
      cy.location('pathname').should('equal', '/testing-your-first-application');
    })

    it('Course: Testing foundations', () => {
      cy.getByData('course-1').find('a').contains('Get started').click();
      cy.location('pathname').should('equal', '/testing-foundations');
    })

    it('Course: Cypress fundamentals', () => {
      cy.getByData('course-2').find('a').contains('Get started').click();
      cy.location('pathname').should('equal', '/cypress-fundamentals');
    })
  })

})