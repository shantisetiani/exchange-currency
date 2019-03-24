describe('Change Currency', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it('Check input number', function() {
      cy.openApp()

      //Change input number - Start
      cy.get('#txtNumber')
      .type('{selectall}{backspace}25000')
      .should('have.value', '25000')
      //Change input number - End
    })
})