class Tabelas {
    constructor(conexao) {
        this.conexao = conexao
    }

    criaCelular() {
        const sql = `CREATE TABLE celular (
            id int AUTO_INCREMENT, marca varchar(20), modelo varchar(20) UNIQUE,
            PRIMARY KEY(id))`

        this.conexao.query(sql)
    }

}

module.exports = Tabelas