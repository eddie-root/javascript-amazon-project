# 🛒 JavaScript Amazon Project

> Projeto educacional desenvolvido com **HTML, CSS e JavaScript**, inspirado na interface e no fluxo de compras de um e-commerce como a Amazon.

## 📌 Sobre o projeto

O **JavaScript Amazon Project** é uma aplicação web desenvolvida para simular o funcionamento básico de uma loja virtual.

O projeto permite que o usuário navegue por uma lista de produtos, escolha a quantidade desejada, adicione produtos ao carrinho e avance pelo processo de checkout.

Durante o checkout, o usuário pode escolher entre diferentes opções de entrega, cada uma com uma data e uma taxa de entrega específica. O sistema calcula automaticamente o valor dos produtos, frete e impostos antes de finalizar o pedido.

O projeto foi desenvolvido com foco no aprendizado e na prática de conceitos fundamentais de **JavaScript**, manipulação do DOM, eventos, armazenamento de dados e construção de interfaces web.

---

## 🎯 Objetivos

O principal objetivo deste projeto foi praticar conceitos de desenvolvimento web utilizando JavaScript puro.

Entre os principais objetivos estão:

- Desenvolver uma interface semelhante a um e-commerce.
- Trabalhar com HTML sem frameworks.
- Criar estilos utilizando CSS.
- Manipular elementos da página através do JavaScript.
- Trabalhar com eventos e interações do usuário.
- Implementar um carrinho de compras.
- Controlar quantidade de produtos.
- Calcular valores automaticamente.
- Implementar opções de entrega.
- Calcular taxas de entrega.
- Calcular impostos.
- Simular o processo de checkout.
- Exibir pedidos realizados.
- Simular o acompanhamento da entrega.

---

## 🚀 Funcionalidades

### 🏠 Página inicial

A página inicial apresenta uma lista de produtos disponíveis para compra.

O usuário pode:

- Visualizar os produtos.
- Visualizar imagem, nome, avaliação e preço.
- Selecionar a quantidade desejada.
- Adicionar produtos ao carrinho.

![Página inicial](./images/home.png)

---

### 🛒 Carrinho de compras

Depois de adicionar os produtos, o usuário pode acessar o carrinho para revisar sua compra.

No carrinho é possível:

- Visualizar os produtos selecionados.
- Alterar a quantidade.
- Remover produtos.
- Visualizar o subtotal.
- Escolher uma opção de entrega.
- Visualizar a taxa de entrega.
- Visualizar os impostos.
- Conferir o valor total da compra.

![Carrinho e checkout](./images/checkout.png)

---

### 🚚 Opções de entrega

O sistema disponibiliza diferentes opções de entrega.

Cada opção possui:

- Uma data prevista de entrega.
- Uma taxa de entrega correspondente.

Ao selecionar uma opção, o valor do frete é atualizado automaticamente no resumo do pedido.

---

### 💳 Checkout

Após revisar os produtos e selecionar a opção de entrega, o usuário pode avançar para a etapa de pagamento.

O resumo apresenta:

```text
Produtos
+ Taxa de entrega
+ Impostos
----------------
= Total do pedido
