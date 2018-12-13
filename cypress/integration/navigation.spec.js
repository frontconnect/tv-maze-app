describe('Home Page', () => {
  it('Loads Home Page', () => {
    cy.visit('/');
    cy.title().should('eq', 'Home');
    cy.get('[data-cy=main]').should('contain', 'Hello World');
  });

  it('Loads Show Page', () => {
    cy.visit('/');
    cy.visit('/shows/28135');
    cy.title().should('contain', 'Show');
    cy.get('[data-cy=show-title]').should('contain', 'Nightfly');
    cy.get('[data-cy=show-description]').should('contain', 'Nightfly');
  });

  it('Handles Not Found Error', () => {
    cy.visit('/');
    cy.visit('/shows/0');
    cy.get('[data-cy=show-not-found-error]');
  });

  it('Loads Episode Page', () => {
    cy.visit('/');
    cy.visit('/shows/2/episode/2/3');
    cy.title().should('contain', 'Episode');
    cy.get('[data-cy=episode]').should('contain', 'Hello episode page');
  });

  it('Fallbacks to NotFound page if url does not match any route', () => {
    cy.visit('/');
    cy.visit('/hede');
    cy.get('[data-cy=show-not-found-error]');
  });
});
