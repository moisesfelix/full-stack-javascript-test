# Full Stack JavaScript Test

## Project Overview

...

## Tasks to Complete

Your objective is to complete the following tasks. Feel free to choose your approach, but keep the solution straightforward. Prioritize the tasks below, focus on production services rather than UI, and feel free to express your preferences, opinions, and strengths where applicable.

To ensure clarity, avoid unnecessary file and code movements, enabling reviewers to easily identify changes made.

### Tasks:

- [x] **Task 1: Fetch and display the list of existing payments**

    - [x] Acesse o diretório ./frontend/src/pages e abra o arquivo PaymentsList.js.
    - [x] Dentro do componente PaymentsList, você precisará adicionar código para fazer uma solicitação GET à rota /api/payments do backend.
    - [x] Use uma biblioteca como axios para fazer a chamada de API a partir do frontend e recuperar a lista de pagamentos existentes.
    - [x] Armazene a lista de pagamentos em um estado no componente e renderize-a na tabela da página PaymentsList.

- [x] **Task 2: Handle form submission to create new payments**

    - [x] Acesse o diretório ./frontend/src/pages e abra o arquivo PaymentCreate.js.
    - [x] Dentro do componente PaymentCreate, você precisará adicionar código para lidar com o envio do formulário.
    - [x] Crie um estado no componente para armazenar os valores dos campos do formulário.
    - [x] Implemente uma função de manipulação de envio que faça uma solicitação POST à rota /api/payments do backend com os dados do pagamento.
    - [x] Após o envio bem-sucedido, redirecione o navegador para a página PaymentsList, onde o novo pagamento será exibido.

- [x] **Task 3: Secure the payment-api with an API key**

    - [x] Acesse o diretório ./backend e abra o arquivo server.js.
    - [x] Dentro do arquivo server.js, você precisará adicionar um middleware de autenticação para verificar a presença e validade da chave de API em todas as solicitações para /api/payments.
    - [x] Você pode configurar a chave de API como uma variável de ambiente no arquivo .env e acessá-la no servidor usando process.env.
    - [x] Implemente a lógica para verificar se a chave de API presente na solicitação corresponde à chave esperada.
    - [x] Se a chave de API for inválida ou ausente, retorne uma resposta de erro ou negação de acesso.
 
- [x] **Task 4: Assign a unique id to each new payment**

    - [x] Acesse o diretório ./backend e abra o arquivo server.js.
    - [x] Dentro do arquivo server.js, você precisará adicionar um mecanismo para gerar um ID único para cada novo pagamento.
    - [x] Crie uma função que gera um ID com base nos critérios especificados (único, com 7 caracteres e usando os caracteres mencionados).
    - [x] Ao criar um novo pagamento na rota /api/payments, atribua um ID único ao pagamento antes de armazená-lo.
    - [x] Certifique-se de que o ID gerado não esteja em uso por nenhum outro pagamento existente.

---

**Note:** Este projeto Full Stack JavaScript permite que os usuários criem uma conta e façam login para gerenciar uma lista de pagamentos. A autenticação é realizada através de tokens, garantindo a segurança das rotas de pagamento.

Para começar, você precisa criar uma conta fornecendo as informações necessárias. Em seguida, faça o login utilizando os dados de acesso criados anteriormente. Com o login bem-sucedido, você terá acesso à funcionalidade completa da aplicação.

Ao estar autenticado, você pode criar novos pagamentos, preenchendo os detalhes necessários. Além disso, é possível visualizar a lista de pagamentos existentes, que será exibida na página inicial após o login.

A utilização de tokens para validação das rotas de pagamento garante que apenas usuários autenticados possam criar e visualizar a lista de pagamentos. Dessa forma, a segurança da aplicação é garantida.

Sinta-se à vontade para explorar e utilizar as funcionalidades do projeto. Em caso de dúvidas ou problemas, não hesite em entrar em contato com a equipe responsável.

Aproveite a experiência e desfrute da gestão simplificada da lista de pagamentos!

