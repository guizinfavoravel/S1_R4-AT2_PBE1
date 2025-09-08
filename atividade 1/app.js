const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8081;

app.get("/usuarios", (req, res) => {//aqui o usuario sera  achave para encontrar o resto dos usuarios
  try {
   
    const data = fs.readFileSync("usuarios.json", "utf-8");

  
    const usuarios = JSON.parse(data);

    res.status(200).json(usuarios);
  } catch (erro) {
    console.error("Erro ao ler usuarios.json:", erro.message);
    res.status(500).json({ erro: "Erro ao procurar os usuários" });//caso nao seja possivel acessar o usuario voltara com um erro 200
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});