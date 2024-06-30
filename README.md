# Autenticação Segura com JWT em Nest JS

![NestJS](https://img.shields.io/badge/NestJS-v10.0.10-green)
![JWT](https://img.shields.io/badge/JWT-v10.2.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.1.3-green)

## Descrição

Este projeto é uma aplicação Nest JS simples que demonstra a funcionalidade de autenticação utilizando tokens JWT (JSON Web Tokens). Ele foi criado com o propósito de ser um exemplo para portfólio, mostrando como implementar um dos tipos de autenticação bearer em aplicações Nest JS.

![Geração do token JWT](https://media.geeksforgeeks.org/wp-content/uploads/20210929231305/ezgifcomgifmaker2.gif)

![Utilização do token](https://media.geeksforgeeks.org/wp-content/uploads/20210929231008/ezgifcomgifmaker1.gif)

## Funcionalidades

- Consulta de usuários (autenticação necessária)
- Autenticação de usuários existentes
- Geração de tokens JWT
- Proteção de rotas utilizando guardas de autenticação
- Documentação da API com Swagger

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- Node.js (>= 21.7.3)
- npm (>= 10.8.1)

Este é o meu ambiente de desenvolvimento! Não é necessária a última versão do Node nem do NPM, porém, para resultados semelhantes, se possível, utilize versões atualizadas.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/thainanluiz/Nest-JS-JWT.git nest-jwt
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nest-jwt
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

Para configurar o projeto, você pode alterar a variável de ambiente JWT_KEY no arquivo .env para uma chave secreta de sua escolha. Esta chave é utilizada para assinar os tokens JWT gerados pela aplicação.

Quanto mais complexa a chave for, mais seguro será o token gerado. Por isso, é recomendado que você utilize uma chave segura e complexa.

## Execução

Para executar o projeto, utilize o comando:

```bash
npm run start
```

## Documentação

A documentação da API está disponível em http://localhost:3000/docs após iniciar o servidor. A documentação foi gerada utilizando o Swagger e fornece detalhes sobre os endpoints disponíveis, os parâmetros esperados e os exemplos de resposta.

Para acessar a documentação, abra o navegador e acesse o seguinte endereço:

```
http://localhost:3000/docs
```

## Endpoints

### Autenticação

- POST /v1/auth/login: Autentica um usuário e gera um token JWT

  O body da requisição deve conter um objeto JSON com as propriedades "email" e "password" do usuário.

  ```json
  {
    "email": "johndoe@mail.com",
    "password": "1234567"
  }
  ```

  A resposta da requisição será um objeto JSON.

  ```json
  {
    "message": "User login successful",
    "data": {
      "token": "..."
    },
    "status": 200,
    "timestamp": 1719708082939
  }
  ```

### Usuários

- GET /v1/user: Retorna todos os usuários cadastrados (autenticação bearer necessária)

  A resposta da requisição será um objeto JSON com a lista de usuários.

  ```json
  {
    "timestamp": 1719706610543,
    "status": 200,
    "message": "Users retrieved successfully",
    "data": [
      {
        "id": "1",
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@mail.com"
      },
      ...
    ]
  }
  ```

## Contribuições neste projeto são bem-vindas!

Se você deseja contribuir com este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Toda contribuição é bem-vinda!
