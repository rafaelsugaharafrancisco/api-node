const customExpress = require("./config/customExpress")

const app = customExpress()

app.listen(8080, () => console.log("servidor rodando na porta 8080"))

