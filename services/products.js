const ProductModel = require("../models/product")


class Products{
    async getAll(){
        const products = await ProductModel.find()

        return products
    }

    async getOne(idProduct){
        const product = await ProductModel.findById(idProduct)

        return product
    }

    async create(data){
        const product = await ProductModel.create(data)

        return product
    }

    async delete(id,idUser){
        
        try {
            const product = await ProductModel.findOneAndDelete({
                _id:id,
                
            })

            return {
                success:true,
                product,
                message:"Deleted succesfully"
            }
        } catch (error) {
            console.log(error)
            return {
                success:false,
                message:"An error ocurred. Maybe you are not the owner"
            }
        }
    }

    async update(id,data){
        try{
            const product = await ProductModel.findByIdAndUpdate(id,data,{new:true})
            // Ya tenemos disponibles los datos

            return product // Objeto
        }catch(error){
            console.log(error)
        }
    }
}


module.exports = Products