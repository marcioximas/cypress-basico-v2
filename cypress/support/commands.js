Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Marcio')
    cy.get('#lastName').type('Coelho')
    cy.get('#email').type('ximas@ximas.com')
    cy.get('#open-text-area').type('Test Automated ximas')
    cy.contains('button', 'Enviar').click()
})