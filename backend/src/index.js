const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors(/* { origin: 'http://nomedoapp.com' } */)); 
app.use(express.json());
app.use(routes);

// Rota / Recurso 
// Métodos HTTP: GET, UPDATE, DELETE, PUT

// Tipos de parâmetros: 
// - Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação etc) (request.query)
// - Route params: parâmetros utilizados pra identificar recursos (request.params)
// - Request Body: Corpo da requisição - utilizado pra criar ou alterar recursos (request.body)

// Bancos de dados:
// SQL: Mysql, Postgres, SQLite etc
// NoSQL: MongoDB, CouchDB etc
// Podemos 
// - instalar o Driver: SELECT * FROM users
// - usar query builder: table('users').select('*').where()... <- VAMOS USAR ESSE: KNEX.JS

app.listen(5000);