///<reference types="cypress" />

describe ('Funcionalidade: Login', () =>{

    beforeEach(() => { 
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });
    
    it('Deve fazer login com sucesso', () => {   
        cy.get('#username').type('sertao.teste777@teste.com.br')
        cy.get('#password').type('12teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, sertao.teste777 (não é sertao.teste777? Sair)') 
    })

    it('Deve exibir um erro ao inserir usuário inválido', () => {         
        cy.get('#username').type('sertao@teste.com.br')
        cy.get('#password').type('12teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should
    });

    it('Deve exibir um erro ao inserir senha inválida', () => {
        cy.get('#username').type('sertao.teste777@teste.com.br')
        cy.get('#password').type('12teste3')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should
    });
})