/// <reference types="Cypress" />


describe('Central de Atemdimento ao Cliente TAT', function() {
  beforeEach(function() {
    cy.visit('./src/index.html')
  });
  it('Verifica o titulo da aplicacao',function() {

      
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche os campos obrigatorios e envia o formulario',function() {
    cy.get('#firstName').type('Marcio')
    cy.get('#lastName').type('Coelho')
    cy.get('#email').type('ximas@ximas.com')
    cy.get('#open-text-area').type('Test Automated ximas')
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
  })
  it('Valida email invalido',function() {
    cy.get('#firstName').type(0,'Marcio')
    cy.get('#lastName').type('Coelho')
    cy.get('#email').type('ximasximas.com')
    cy.get('#open-text-area').type('Test Automated ximas')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
    cy.get('#firstName').type(0,'Marcio')
    cy.get('#lastName').type('Coelho')
    cy.get('#email').type('ximas@ximas.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Test Automated ximas')
    cy.get('#phone').type('asdhashdjkas').should('have.visible','')

  })
  it('Preenche os campos obrigatorios e envia o formulario',function() {
    cy.get('#firstName').type('Marcio')
    cy.get('#lastName').type('Coelho')
    cy.get('#email').type('ximas@ximas.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Test Automated ximas')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })
  it('preenche e limpa os campos nome, sobrenome, email e telefone',function() {
    cy.get('#firstName').type('Marcio').should('have.value','Marcio').clear().should('have.value','')
    cy.get('#lastName').type('Coelho').should('have.value','Coelho').clear().should('have.value','')
    cy.get('#email').type('ximas@ximas.com').should('have.value','ximas@ximas.com').clear().should('have.value','')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('Test Automated ximas').should('have.value','Test Automated ximas').clear().should('have.value','')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  })
  it('preenche e limpa os campos nome, sobrenome, email e telefone',function() {

    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })
  it('envia o formulario com sucesso usanado comando customizado',function() {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })
  it('caixa suspesa ',function() {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })
  it('seleciona um produto (YouTube) por seu text',function(){
    cy.get('#product')
    .select('YouTube')
    .should('have.value','youtube')
  })
  it('seleciona um produto (Mentoria ) por seu valor (value)',function(){
    cy.get('#product')
    .select('mentoria')
    .should('have.value','mentoria')
  })
  it('seleciona um produto (Blog ) por seu indice',function(){
    cy.get('#product')
    .select(1 )
    .should('have.value','blog')
  })
  it('seleciona uma marca do tipo de atendimento de feedback',function(){
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('have.value','feedback')
  })
  it('marca cada tipo de atendimento',function(){
    cy.get('input[type="radio"]')
    .should('have.length',3)
    .each(function($radio){
      cy.wrap($radio).check()
      cy.wrap($radio).should('be.checked')
    })
  })
  it('marca cada tipo de atendimento',function(){
    cy.get('input[type="radio"]')
    .should('have.length',3)
    .each(function($radio){
      cy.wrap($radio).check()
      cy.wrap($radio).should('be.checked')
    })
  })
  it('marca ambos  checkboxs e desmarca o ultimo',function(){
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
 
    })
    it('select file from folder fixtures',function(){
      cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json');

        
      })
    })
    it('select with drag and drop file',function(){
      cy.get('input[type="file"]')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json'),{action: 'drag-drop'}
      .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json');

        
      })
    })
    it('verify that politic of privacity is open in other aba',function(){
     cy.get('#privacy a ')
     .invoke('removeAttr','target')
     .click()

      cy.contains('Talking About Testing').should('be.visible')
      })

  })