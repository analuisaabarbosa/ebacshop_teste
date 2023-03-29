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
        EndereçoPage.editarEnderaçoFaturamento('Ana', 'Barbosa', 'Google', 'Brasil', 'Av Euclides', '420', 'São Bernardo do Campo', 'São Paulo', '14807-262', '+55 11 91083-1095', 'analuisa@barbosa.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usanso arquivo de dados', () => {
        EndereçoPage.editarEnderaçoFaturamento(
            dadosEndereco[0].nome, 
            dadosEndereco[0].sobrenome, 
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais, 
            dadosEndereco[0].endereco, 
            dadosEndereco[0].numero, 
            dadosEndereco[0].cidade, 
            dadosEndereco[0].estado, 
            dadosEndereco[0].cep, 
            dadosEndereco[0].celular,
            dadosEndereco[0].email)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });
});