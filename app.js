const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Definir rota para a raiz ("/") para retornar um arquivo
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "IPTV_LIST_25-06-2024.m3u"); // Substitua 'index.html' pelo nome do seu arquivo
  res.sendFile(filePath);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
