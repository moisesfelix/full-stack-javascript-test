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

**Note:**

# Full Stack JavaScript Test

This is a full-stack JavaScript test project that includes a backend, frontend, payment API, and authentication API.


## Prerequisites

Before running the project, make sure you have the following installed:

   - Node.js
   - npm (Node Package Manager)

## Installation and Usage

   1. Clone this repository to your local machine.
   2. Navigate to the project directory:
```shell
cd full-stack-javascript-test/code-challenge-main
```
Install the dependencies and start all projects by running the following command:

``` shell

    npm run install-start
```
    This command will install the necessary dependencies for each project and start them concurrently.
    Wait for the installation process to complete.
    Once the installation is finished, you will be directed to the login screen.
    Follow the login process with your credentials to access the application.

## Development Information

This project is built using the following technologies:

- Backend: Node.js with Express
- Frontend: React with Create React App
- Payment API: Custom API implementation
- Authentication API: Custom API implementation

Feel free to explore the code and make any modifications or improvements as needed.
