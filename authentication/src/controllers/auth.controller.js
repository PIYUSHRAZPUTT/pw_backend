import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import userModel from "../models/user.model.js";
dotenv.config();
const app= express();

export const createUser= async(req, res)=>{
    try {
        const {name="",email="", password=""}= req.body;
        if(!name||!email||!password){
            res.status(404).json({
                message:"name, email and password is required"
            })
        }
        const user= await userModel.create({
            name,
            email,
            password
        });

        const token=jwt.sign({
            id:user._id
        },process.env.JWT_SECRET);

        res.cookie("token", token);
        res.status(201).json({
            message:"User created Successfully",
            user,
        });


        
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

export const createPost= async(req, res)=>{
    try{
        const token= req.cookies.token;
        if(!token){
            return res.status(403).json({
                message:"unauthorized"
            })
        }
        const decoded=jwt.verify(token, process.env.JWT_SECRET);
        const user= await userModel.findOne({
            id:decoded._id
        });
        return res.status(201).json({
            message:"Post created Successfully",
            user
        })
    }catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}
