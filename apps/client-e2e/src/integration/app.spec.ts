describe('clap', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should count claps ', () => {
        cy.contains('No one clapped yed');
    });
});