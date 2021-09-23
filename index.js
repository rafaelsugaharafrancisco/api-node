const express = require("express")

const app = express()

app.listen(8080, () => console.log("servidor rodando na porta 8080"))

app.get("/atendimento", (req, res) => res.send("Você está na rota de atendimento"))