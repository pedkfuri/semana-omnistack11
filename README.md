# Semana Omnistack 11 Rocketseat

## Passo a passo: 

### Backend: Nodejs

- [x] npm init -y
- [x] [sudo] npm install express
- [x] npm install nodemon -D (-D = dependência do ambiente de desenvolvimento só)
- [x] criação do arquivo src/index.js
- [x] modificar o arquivo package.json: substituir o script de "test" por "start": "nodemon index.js"
- [x] executar nodemon index.js para testar
- [x] npm install knex (http://knexjs.org/)
- [x] npm install sqlite3
- [x] npx knex init
- [x] modificar o knexfile.js => filename: './src/database/db.sqlite'
- [x] modificar o knexfile.js => adicionar diretório de migrations
- [x] modificar o knexfile.js => useNullAsDefault: true
- [x] npx knex migrate:make create_ongs
- [x] npx knex migrate:latest -> cria a tabela
- [x] npx knex migrate:make create_incidents
- [x] npx knex migrate:latest -> cria a tabela
- [x] npm install cors -> determina quem pode acessar a aplicação

### Frontend: React

- [x] [sudo] npx create-react-app frontend

### Mobile: React Native/Expo

- [ ] 



#### Database: 

##### Entidades: 
- [x] ONG
- [x] Casos

##### Funcionalidades: 
- [x] Login de ONG
- [x] Logout de ONG
- [x] Cadastro de ONG
- [x] Cadastro de novos casos
- [x] Deletar casos
- [x] Listar casos específicos de uma ONG
- [x] Listar todos os casos 
- [x] Entrar em contato com a ONG