const Atendimento = require("../models/atendimento")

module.exports = app => {
    app.get("/atendimento", (req, res) => {Atendimento.lista(res)})

    app.get("/atendimento/:id", (req, res) => {
        Atendimento.pesquisaPorId(parseInt(req.params.id), res)
    })
    
    app.post("/atendimento", (req, res) => {
        const celular = req.body
        Atendimento.adiciona(celular, res)
    }) 

    app.patch("/atendimento/:id", (req, res) => {
        const celular = req.body
        Atendimento.atualiza(parseInt(req.params.id), celular, res)
    })

    app.delete("/atendimento/:id", (req, res) => {
        Atendimento.remove(parseInt(req.params.id), res)
    })
}