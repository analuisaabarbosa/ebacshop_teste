/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addprodutos('produtos/#', 'Atlas Fitness Tank', 'XS', 'Blue', '3')
        cy.addprodutos('produtos/page/2/', 'Augusta Pullover Jacket', 'L', 'Red')
        cy.addprodutos('produtos/page/2/', 'Bruno Compete Hoodie', 'M', 'Green')
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        cy.get('#order_comments').type('O endereço da entrega dos produtos está registrado no meu local de trabalho, favor identificar a encomenda e deixar com a recepcionista.')
        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.page-title').should('contain', 'Pedido recebido')
    });
})
