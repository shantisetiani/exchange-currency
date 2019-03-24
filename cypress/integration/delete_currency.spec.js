describe('Delete Currency', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it('Check button delete currency ("-")', function() {
      cy.openApp()

      //Click "-" button of the first currency card - Start
      const firstCurrency = cy.get('.card:first .card-body .card-title')

      cy.get('.btn-delete-card:first').click()
      cy.get('.btn-delete-card:first').should('not.contain',firstCurrency)
      //Click "-" button of the first currency card - End
    })
})