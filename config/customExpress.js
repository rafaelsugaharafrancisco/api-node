const express = require("express")
const consign = require("consign")

module.exports = () => {
    const app = express()
    consign().include("controller").into(app)

    return app
}