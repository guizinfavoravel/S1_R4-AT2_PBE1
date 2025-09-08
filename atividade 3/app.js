const express = require("express")
const fs = require("fs")
const app = express()
const PORT = 8081//local definido do servidor


app.get("/eventos", (req, res) => {
  try {
    const data = fs.readFileSync("eventos.json", "utf-8")
    const eventos = JSON.parse(data);

    const { nome } = req.query;// nome esta sendo declarado para ser um filtro
    let resultado = eventos;

    if (nome) {
      const filtro = nome.toLowerCase();
      resultado = eventos.filter((u) =>
        u.nome.toLowerCase().includes(filtro) //aqui nome sera filtrado para saber qual evento sera localizado
      );
    }

    res.status(200).json(resultado)
  } catch (erro) {
    console.error("Erro ao ler eventos.json:", erro.message);
    res.status(500).json({ erro: "Erro ao procurar os usuários" })// caso nao consiga acessar o usuario voltara com um erro 500
  }
});


app.get("/eventos", (req, res) => {
  try {
    const data = fs.readFileSync("eventos.json", "utf-8")
    const eventos = JSON.parse(data);

    const { data: filtroData } = req.query
    let resultado = eventos;

    if (filtroData) {
      resultado = eventos.filter((e) => e.data === filtroData)
    }

    res.status(200).json(resultado)
  } catch (erro) {
    console.error("Erro ao ler eventos.json:", erro.message)
    res.status(500).json({ erro: "Erro interno ao acessar os eventos" })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})