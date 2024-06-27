const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors({ origin: "*" }));

// Definir rota para a raiz ("/") para retornar um arquivo
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "teste.m3u"); // Substitua 'index.html' pelo nome do seu arquivo
  res.sendFile(filePath);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
