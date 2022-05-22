describe('Creating a message', () => {
    it('Display a message in the list', () => {
        // Basically telling cy to visit localhost (where we're hosting the website)
        cy.visit('http://localhost:3000/');
        // Tell cy to go to the messageBox and type in New Message
        cy.get("[data-testid = 'messageBox']").type('New Message');
        // Tell cy to go to the sendButton and click on it
        cy.get("[data-testid = 'sendButton']").click();
        // Have cy check the messageBox and make sure that it is now empty as the message has resetted
        cy.get("[data-testid = 'messageBox']").should('have.value', '');
        // Have cy check that our message has appeared somewhere
        cy.contains('New Message')
    })
})