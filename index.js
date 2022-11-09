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

  // Exibimos uma mensagem de sucesso
  res.send("Item criado com sucesso!");
});

// Endpoint [GET] /itens/:id - READ BY ID (Ler pelo ID)
app.get("/itens/:id", function (req, res) {
  // Pegamos o parâmetro de rota ID
  const id = req.params.id - 1;

  // Acessamos o item pelo índice
  const item = itens[id];

  // Exibimos o item encontrado
  res.send(item);
});

// Endpoint [PUT] /itens/:id - UPDATE BY ID (Atualizar pelo ID)
app.put("/itens/:id", function (req, res) {
  // Pegamos o parâmetro de rota ID
  const id = req.params.id - 1;

  // Pegamos o nome enviado no body
  const item = req.body.nome;

  // Atualizamos com o novo item, na posição ID da lista de itens
  itens[id] = item;

  res.send("Item atualizado com sucesso!");
});

app.listen(3000, function () {
  console.log("Servidor rodando em http://localhost:3000");
});
