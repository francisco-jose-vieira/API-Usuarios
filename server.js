import express from "express";
const app = express();
app.use(express.json());

/* 
    1) Tipo de rota / Método HTTP (get, post, delite, put)
    2) Endereço (/clientes, /produtos, /usuarios)
    franciscojose
    5s725IrvlS6jnJBw
*/

/* 
    Criar nossa API de Usuários
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/

const users = [];

app.post("/usuarios", (req, res) => {
  //console.log(req.body);
  //res.send("Ok Post deu certo");

  users.push(req.body);
  res.status(201).json(req.body)
});

app.get("/usuarios", (req, res) => {
  //res.send("Tudo OK");

  res.status(200).json(users)
});

app.listen(3000);
