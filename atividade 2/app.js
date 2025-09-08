const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8081;

app.get("/usuarios", (req, res) => {
  try {
    
    const data = fs.readFileSync("usuarios.json", "utf-8")
    const usuarios = JSON.parse(data)

   
    const { nome } = req.query//constante nme declarada para ser utilizada

    let resultado = usuarios 

 
    if (nome) {
      const filtro = nome.toLowerCase();
      resultado = usuarios.filter((u) =>//aqui ele vai ser filtrado pelo nome que o usuario colocar
        u.nome.toLowerCase().includes(filtro)
      )
    }

    res.status(200).json(resultado)
  } catch (Erro) {
    console.error("Erro ao ler usuarios.json:", erro.message)
    res.status(500).json({ erro: "Erro ao procurar os usuários" })//caso o destino do usuario nao seja localizada voltara com um erro 200
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})