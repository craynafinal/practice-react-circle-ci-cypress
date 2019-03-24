describe('Main Page', () => {
    it('should have the home navigation bar', () => {
        cy.visit('/');
        cy.contains('Home is working!');
    });
    it('should have the react link', () => {
        cy.visit('/');
        cy.get('.App-link').should('exist');
    });
  });