const Atendimento = require("../models/atendimento")

module.exports = app => {
    app.get("/atendimento", (req, res) => res.send("Você está na rota de atendimento"))
    
    app.post("/atendimento", (req, res) => {
        const celular = req.body
        Atendimento.adiciona(celular)
        res.send("Você está na rota de atendimento e está realizando o método POST")
    }) 
}