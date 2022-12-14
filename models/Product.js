const {mongoose} = require("../config/db")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
    },
    description:{
        type:String,
        required:[true,"description"]
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    stock:{
        type:Number,
        required:[true,"stock is required"]
    },
   
})

const ProductModel = mongoose.model("product",productSchema)

module.exports = ProductModel