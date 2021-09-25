const customExpress = require("./config/customExpress")
const conexao = require("./infra/conexao")
const CriaTabelas = require("./infra/cria-tabelas")

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        new CriaTabelas(conexao).celular()
        const app = customExpress()
        app.listen(8080, () => console.log("servidor rodando na porta 8080"))
    }
})

