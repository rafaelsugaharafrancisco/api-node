const customExpress = require("./config/customExpress")
const conexao = require("./infra/conexao")
const Tabelas = require("./infra/tabelas")

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        new Tabelas(conexao).criaCelular()
        const app = customExpress()
        app.listen(8080, () => console.log("servidor rodando na porta 8080"))
    }
})

