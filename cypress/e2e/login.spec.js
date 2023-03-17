///<reference types = "cypress"/>

context('Funcionalidade: Página de Login', () => {

    it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
    
    it('Deve exibir mensagem de aviso ao inserir usuário inválido', () => {

    })
})



