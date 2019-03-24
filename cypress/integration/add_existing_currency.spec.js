describe('Add Existing Currency', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it('Check if add the existing currency', function() {
      cy.openApp()

      //Click "Add More Currencies" button - Start
      cy.get('#btnAddMore').click()
      cy.get('#ddCurrency').should('be.visible')
      //Click "Add More Currencies" button - End

      //Select currency 'IDR' - Start
      cy.get('#ddCurrency')
      .select('IDR')
      .should('have.value', 'string:IDR')
      //Select currency 'IDR' - End

      //Click submit button - Start
      cy.get('button[id="btnSubmit"]').click()
      cy.get('.card-currency .card')
      .should('have.length', 4)
      //Click submit button - End
    })
})