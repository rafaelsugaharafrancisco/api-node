const conexao = require("../infra/conexao")
const moment = require("moment")

class Atendimento {
    adiciona(celular) {
//        const sql = `INSERT INTO celular (marca, modelo) VALUES ('${celular.marca}', '${celular.modelo}')`

        const dataCriacao = moment(celular.dataCriacao, 'DD-MM-YYYY').format('YYYY-MM-DD')
        const celularDatado = {... celular, dataCriacao}
        const sql = "INSERT INTO celular SET ?"

        conexao.query(sql, celularDatado, (erro, resultado) => erro ? console.log(erro) : console.log(resultado))
    }
}

module.exports = new Atendimento