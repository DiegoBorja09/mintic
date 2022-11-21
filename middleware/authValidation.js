const jwt = require("jsonwebtoken")
const { jwtSecret } = require("../config")

function authValidation(req,res,next){
    const {token} = req.headers

        if(token){
            try{
                const decoded = jwt.verify(token,jwtSecret)

                console.log(decoded)

                req.user = decoded

                return next()
 
            }catch({message,name}){
                // const message = error.message
                // const name = error.name
                return res.status(403).json({
                    error:true,
                    message,
                    type:name
                })
            }
            
        }
    

    

    return res.status(403).json({
        error:true,
        message:"Insufficient permissions"
    })
}



 



module.exports = authValidation