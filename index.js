const express = require("express");
const app = express();

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

// Endpoint [GET] /itens READ ALL (Ler todos os itens)
app.get("/itens", function (req, res) {
  res.send(itens);
});

app.listen(3000, function () {
  console.log("Servidor rodando em http://localhost:3000");
});
