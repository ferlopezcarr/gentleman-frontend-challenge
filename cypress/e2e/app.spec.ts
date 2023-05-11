describe('App', () => {
  it('should load the default test component', () => {
    cy.visit('');
    cy.get('p').contains('test works!');
  });
});
