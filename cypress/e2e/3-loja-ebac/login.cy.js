///<reference types="cypress" />

describe ('Funcionalidade: Login', () =>{
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('sertao.teste777@teste.com.br')
        cy.get('#password').type('12teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, sertao.teste777 (não é sertao.teste777? Sair)')
    })
})