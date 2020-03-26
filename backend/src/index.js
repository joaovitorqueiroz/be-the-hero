const express = require('express');
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma Informação no back-end
 * DELETE: Deleta uma infirmação no back-end 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)  rota /user ex:  https://localhost/user?idade=12&nome=joao  acessar: req.query
  * Route Params: Parâmetros ultilizados para identificar recursos rota /user/:id ex: https://localhost/user/1245 acessar: req.params 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos acesso: req.body
  */

  /**
   *  Banco SQLite
   */



