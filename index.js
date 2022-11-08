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

app.listen(3000, function () {
  console.log("Servidor rodando em http://localhost:3000");
});
