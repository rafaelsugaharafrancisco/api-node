const customExpress = require("./config/customExpress")
const conexao = require("./infra/conexao")

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        const app = customExpress()
        app.listen(8080, () => console.log("servidor rodando na porta 8080"))
    }
})

