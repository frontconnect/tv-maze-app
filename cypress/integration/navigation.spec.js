describe('Home Page', () => {
  it('Loads Show Page', () => {
    cy.visit('/');
    cy.visit('/shows/28135');
    cy.title().should('contain', 'Nightfly');
    cy.get('[data-cy=card-title]').should('contain', 'Nightfly');
    cy.get('[data-cy=card-description]').should('contain', 'Nightfly');
  });

  it('Handles Not Found Error', () => {
    cy.visit('/');
    cy.visit('/shows/0');
    cy.get('[data-cy=error-page]');
  });

  it('Loads Episode Page', () => {
    cy.visit('/');
    cy.visit('/shows/28135/episodes/1/1');
    cy.title().should('contain', 'All That We Left Behind');
    cy.get('[data-cy=episode]');
  });

  it('Fallbacks to ErrorPage page if url does not match any route', () => {
    cy.visit('/');
    cy.visit('/hede');
    cy.get('[data-cy=error-page]');
  });
});
