const express = require("express");
const app = express();

// Sinalizamos que estamos usando JSON no Body
app.use(express.json());

// Endpoint principal
app.get("/", function (req, res) {
  res.send("Hello World!!!");
});

// Endpoint /oi
app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

// Lista de informações
const itens = ["Café Pelé", "Café Pilão", "Café Arábico"];
//             0             1             2

// Endpoint [GET] /itens - READ ALL (Ler todos os itens)
app.get("/itens", function (req, res) {
  res.send(itens);
});

// Endpoint [POST] /itens - CREATE (Criar um item)
app.post("/itens", function (req, res) {
  // console.log(req.body);

  // Pegamos o nome enviado no body
  const item = req.body.nome;

  // Inserimos o valor recebido na lista
  itens.push(item);

  res.send("Item criado com sucesso!");
});

app.listen(3000, function () {
  console.log("Servidor rodando em http://localhost:3000");
});
