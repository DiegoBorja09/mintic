const express = require("express")
const { port } = require("./config")
const {connection} = require("./config/db")


//Importando routes
const users = require("./routes/users")
const auth = require("./routes/auth")
const product = require("./routes/products")

connection()

const app = express()

app.use(express.json())
//Usando routes
users(app)
auth(app)
product(app)



app.listen(port,()=>{
    console.log("Listening: http://localhost:"+port)
})