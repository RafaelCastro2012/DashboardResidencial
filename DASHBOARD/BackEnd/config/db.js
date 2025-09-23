//incluir biblioteca de conexão
const mysql = require ("mysql2/promise");
require("dotenv").config(); //carregar variaveis de ambiente
//criar conexão com banco de dados
const client = mysql.createPool({
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = client;