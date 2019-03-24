//Command to open "Foreign Exchange Currency" App in browser
Cypress.Commands.add("openApp", () => {
    cy.visit('http://localhost:3000/')
    cy.url()
    .should('include', 'http://localhost:3000/')

    cy.wait(2000)
})