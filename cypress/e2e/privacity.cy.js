it('test politic page privacity way independent',function(){
cy.visit('./src/privacy.html')
cy.contains('Talking About Testing').should('be.visible')
})