import express from "express";
const app = express();

/* 
    1) Tipo de rota / Método HTTP (get, post, delite, put)
    2) Endereço (/clientes, /produtos, /usuarios)
*/

/* 
    Criar nossa API de Usuários
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/

const users = []

app.post("/usuarios", (req, res) => {
    console.log(req);
    res.send("Ok Post deu certo")
    
})


app.get("/usuarios", (req, res) => {
  res.send("Tudo OK");
});

app.listen(3000);



