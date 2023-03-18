///<reference types = "cypress"/>

context('Funcionalidade: Página de Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')   
    });
    afterEach(() => {
        cy.screenshot() 
    });
    

    it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain' , 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta')
    })
    
    it('Deve exibir mensagem de aviso ao inserir usuário inválido', () => {
    cy.get('#username').type('xoxoebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('Deve exibir mensagem de recuperação ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

        })
})


