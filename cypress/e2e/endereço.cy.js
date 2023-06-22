///<reference types = "cypress"/>
import EndereçoPage from "../support/page-objects/endereço.page";
const dadosEndereco = require ('../fixtures/endereco.json')

context('Funcionalidade: Endereço - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EndereçoPage.editarEnderaçoFaturamento('Ana', 'Barbosa', 'Google', 'Brasil', 'Av Euclides', '420', 'São Bernardo do Campo', 'São Paulo', '09725', '+55 11 91083-1095', 'analuisa@barbosa.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it('Deve fazer cadastro de faturamento com sucesso - Usanso arquivo de dados', () => {
        EndereçoPage.editarEnderaçoFaturamento(
            dadosEndereco[1].nome, 
            dadosEndereco[1].sobrenome, 
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais, 
            dadosEndereco[1].endereco, 
            dadosEndereco[1].numero, 
            dadosEndereco[1].cidade, 
            dadosEndereco[1].estado, 
            dadosEndereco[1].cep, 
            dadosEndereco[1].celular,
            dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });
});