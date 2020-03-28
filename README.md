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
- [ ] npm install celebrate -> validações

### Frontend: React

- [x] [sudo] npx create-react-app frontend
- [x] deletar arquivos desnecessários: README, App.css, App.test.js, logo.svg, index.css, serviceworker, setupTests.js, public/robots.txt, public/manifest.json, public/logos, 
- [x] excluir importações dos arquivos deletados dentro de index.js, App.js e public/index.html
- [x] settings.json -> adicionar as linhas "emmet.syntaxProfiles": {"javascript": jsx}, "emmet.includeLanguages": { "javascript": "javascriptreact"},

### Mobile: React Native/Expo

- [x] npm install -g expo-cli (-g = global)
- [x] expo init mobile -> cd mobile
- [x] npm install @react-navigation/native
- [x] expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- [x] expo install expo-constants
- [x] expo install expo-mail-composer 
- [x] npm install axios
- [x] npm install intl -> transformar reais etc

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

#### Testes:
- [x] npm install jest -D
- [x] npx jest --init
- [x] npm test
- [x] npm install cross-env
- [x] npm install supertest -D

#### Depois: 

###### Deploy: 
- [ ] BACKEND => Simples: Heroku /// Comercial: Digital Ocean, AWS, Azure, Google Cloud
- [ ] FRONTEND => Netlify

##### Padrões de código: 
- [ ] ESLint
- [ ] Prettier

##### Autenticação:
- [ ] JWT

##### Estilização: 
- [ ] Styled components