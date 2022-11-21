const express = require("express")
const ProductsService = require("../services/products")


function products(app){
    const router = express.Router()
    const productsServ = new ProductsService()

    app.use("/api/products",router)

    router.get("/",async (req,res)=>{
        const result = await productsServ.getAll()
        return res.json(result)
    })


    router.get("/one/:id",async (req,res)=>{
        const id = req.params.id

        const result = await productsServ.getOne(id)

        return res.json(result)
    })

    router.post("/",async (req,res)=>{
        const result = await productsServ.create( req.body)

        return res.json(result)
    })
    router.put("/:id",async (req,res)=>{
        const user = await productsServ.update(req.params.id,req.body)
        return res.json(user)
    })

    router.delete("/:id",async (req,res)=>{
        const result = await productsServ.delete(req.params.id)

        return res.json(result)
    })
}


module.exports = products