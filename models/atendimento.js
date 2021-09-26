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

    lista(res) {
        const sql = "SELECT * FROM celular"
        conexao.query(sql, (erro, resultado) => erro ?
            res.status(400).json(erro) : res.status(200).json(resultado))
    }

    pesquisaPorId(id, res) {
        const sql = `SELECT * FROM celular WHERE id=${id}`
        conexao.query(sql, (erro, resultado) => erro ?
            res.status(400).json(erro) : objetoCelular(resultado))

        function objetoCelular(resultado) {
            if (resultado.length == 0) {
                res.status(200).send(`Celular com id ${id} não encontrado`)
            } else {
                res.status(200).json(resultado[0])
            } 
        }
    }

    atualiza(id, celular, res) {
        celular.dataCriacao = moment(celular.dataCriacao, 'DD-MM-YYYY').format('YYYY-MM-DD')

        const sql = "UPDATE celular SET ? WHERE id=?"

        conexao.query(sql, [celular, id], (erro, resultado) => erro ?
            res.status(400).json(erro) : res.status(200).json(celular))
    }

    remove(id, res) {
        const sql = "DELETE FROM celular WHERE id=?"
        conexao.query(sql, id, (erro, resultado) => erro ?
        res.status(400).json(erro) : res.status(200).json({id}))
    }
}

module.exports = new Atendimento