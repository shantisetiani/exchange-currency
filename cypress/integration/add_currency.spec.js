describe('Add More Currency', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it('Check button "Add More Currencies"', function() {
      cy.openApp()

      //Click "Add More Currencies" button - Start
      cy.get('#btnAddMore').click()
      cy.get('#ddCurrency').should('be.visible')
      //Click "Add More Currencies" button - End

      //Select currency 'JPY' - Start
      cy.get('#ddCurrency')
      .select('JPY')
      .should('have.value', 'string:JPY')
      //Select currency 'JPY' - End

      //Click submit button - Start
      cy.get('button[id="btnSubmit"]').click()
      cy.get('.card-currency .card:last .card-body .card-title')
      .should('contain', 'JPY')
      //Click submit button - End
    })
})