const express = require("express")
const consign = require("consign")
//const bodyParser = require("body-parser") ** Este módulo está a partir da versão 4 do express

module.exports = () => {
    const app = express()

    // app.use(bodyParser.urlencoded({extended: true}))
    // app.use(bodyParser.json())
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())

    consign().include("controller").into(app)

    return app
}