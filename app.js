const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8081;

app.get("/usuarios", (req, res) => {
  try {
   
    const data = fs.readFileSync("usuarios.json", "utf-8");

  
    const usuarios = JSON.parse(data);

    res.status(200).json(usuarios);
  } catch (err) {
    console.error("Erro ao ler usuarios.json:", erro.message);
    res.status(500).json({ erro: "Erro interno ao acessar os usuários" });
  }
});

app.listen(PORT, () => {
  console.log(Servidor rodando em http://localhost:${PORT});
});