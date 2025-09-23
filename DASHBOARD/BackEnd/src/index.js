const express = require('express');
const conexao = require('../config/db');
const routers = require('../src/routers');
const cors = require('cors')
require('dotenv').config()
// const secret = require('../src/secreto')

const app = express();
app.use(express.json())
// secret //para mostar o crypt no terminal
app.use(cors())
app.use(routers)
const PORT = process.env.PORT || 3001

conexao.query("select 1")
.then(()=>{
    console.log("conectado com sucesso")
    app.listen(PORT, function(){
        console.log("Servidor executando na url:http://localhost:3001")
    })
})
.catch(erro=>console.log("Falha na conexão"))