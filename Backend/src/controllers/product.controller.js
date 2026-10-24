import productModel from "../models/products.model.js";
import jwt from "jsonwebtoken";
import userModel from "../models/users.model.js";

async function createProduct(req, res) {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(decoded.role !== "admin"){
            return res.status(403).json({
                message:"Forbidden"
            })
        }


    }catch(err){
        res.status(401).json({
            message:"Invalid Token",
            err: err.message
        })
    }

    res.status(201).json({
        message:"Product added"
    })
}

export {createProduct}