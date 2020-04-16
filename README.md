Drink Coffe é um sistema para lanchonetes.

Para criar ele, usei:

Back-end:
    NodeJS,
    Express,
    Cors,
    Consign,
    NeDB

Front-end: 
    ReactJS,
    Redux,
    ReactIcons,
    ReactRouterDom,
    Axios,
    Sass

Ainda não esta finalizado, mas ja da para brincar um pouco =D.

Usuário: [
    "administrador@gmail.com",
    "funcionairo1@gmail.com",
    "funcionairo2@gmail.com",
    "funcionairo3@gmail.com"
];

Senha para todos os usuário: 123456

O sistema funciona de forma bem simples:

Na rota /pedidos você pode clicar nos botões com o preço dos produtos para adiciona-los 
ao carrinho. Existem 4 categorias atualmente, sobremesas, lanches, salgados e bebidas.
Você clicar em cada uma para encontrar os produtos que quer de maneira mais facil.

Caso queira também é possível cadastrar e editar produtos. 

Agora que já anotou o pedido do cliente é hora de confirmar o pedido!
Vá para a rota /carrinho e confirme com o cliente se tudo esta correto.
Caso algo esteja errado ou ele queira alterar, basta remover o produto nessa mesma tela
clicando no botão "remover" de cada produto que desejar, ou pode ir novamente para /produtos
e adicionar outros que ele queira.

Agora que esta tudo certo, pergunte o nome do cliente ou coloque o numero da mesa no campo
"Nome/Mesa do cliente", para identificar de forma mais facil na ora de entregar e cobrar.

O pedido tem 3 status, preparando, comendo e pago, enquanto estiver em preparando ou comendo,
é natural o cliente querer pedir algo a mais, por isso ainda é possivel clicar no botão de edição
do pedido para cadastrar adicionar novos produtos ou remover produtos caso queira dar de cortesia.
Após finalizar alterar o pedido para "pago", o pedido sumirá do painel, mas ainda continua no
banco para funcionalidades futuras.

Okay... é isso por enquanto, esse é apenas um projeto simples para treinar minhas habilidades com 
programação. 
