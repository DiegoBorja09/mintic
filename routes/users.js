const express = require("express")
const UserService = require("../services/users")
const authValidation = require("../middleware/authValidation")

function users(app){
    const router = express.Router()
    const userServ = new UserService()

    app.use("/api/users",router)

    router.get("/",authValidation, async (req,res)=>{

        console.log(req.user)
        const users = await userServ.getAll() // Array de usuarios

        return res.json(users)
    })
   
    router.put("/:id",authValidation,async (req,res)=>{
        const user = await userServ.update(req.params.id,req.body)
        return res.json(user)
    })
    router.delete("/:id",authValidation,async (req,res)=>{
        const user = await userServ.delete(req.params.id)
        return res.json(user)
    })
}

module.exports = users