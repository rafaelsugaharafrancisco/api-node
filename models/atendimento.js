const conexao = require("../infra/conexao")

class Atendimento {
    adiciona(celular) {
        const sql = "INSERT INTO celular SET ?"
//        const sql = `INSERT INTO celular (marca, modelo) VALUES ('${celular.marca}', '${celular.modelo}')`

        conexao.query(sql, celular, (erro, resultado) => erro ? console.log(erro) : console.log(resultado))
    }
}

module.exports = new Atendimento