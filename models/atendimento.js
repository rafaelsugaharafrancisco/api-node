const conexao = require("../infra/conexao")
const moment = require("moment")

class Atendimento {
    adiciona(celular, res) {
//        const sql = `INSERT INTO celular (marca, modelo) VALUES ('${celular.marca}', '${celular.modelo}')`

        const dataCriacao = moment(celular.dataCriacao, 'DD-MM-YYYY').format('YYYY-MM-DD')

        const marcaEhValido = celular.marca != '' && celular.marca >= 5

        const modeloEhValido = celular.modelo != ''

        const validacoes = [
            { campo:"marca",
              valido: marcaEhValido,
              descricao: "campo marca inválido"

        },
        {
            campo:"modelo",
            valido: modeloEhValido,
            descricao:"campo modelo inválido"
        }
        ]

        const erros = validacoes.filter(campo => !campo.valido)

        if (erros.length > 0) {
            res.status(400).json(erros)
        } else {
            const celularDatado = {... celular, dataCriacao}
            const sql = "INSERT INTO celular SET ?"
    
            conexao.query(sql, celularDatado, (erro, resultado) => erro ? 
                res.status(400).json(erro) : res.status(201).json(celularDatado))
        }
    }
}

module.exports = new Atendimento