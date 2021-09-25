class CriaTabelas {
    constructor(conexao) {
        this.conexao = conexao
    }

    celular() {
        const sql = `CREATE TABLE IF NOT EXISTS celular (
            id int AUTO_INCREMENT, marca varchar(20), modelo varchar(20) UNIQUE,
            PRIMARY KEY(id))`

        this.conexao.query(sql)
    }

}

module.exports = CriaTabelas