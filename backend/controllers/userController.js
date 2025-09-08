
import asyncHandler from "express-async-handler"
import User from "../model/userSchema.js"
import { generateToken } from "../utils/generateToken.js";
export const signup=asyncHandler(async(req,res)=>{

    const {username,email,password} = req.body;

    //verification basique des champs

    if(!username|| ! password || !email){
        throw new Error("Veuillez renseillez tous les champs.")
    }

    //verification de la taille minimal pour un mot de passe
    if(password?.length<6){
        throw new Error ("Votre mot de passe est trop court")
    }

    //user check
    const userExists=await User.findOne({email});
    if(userExists ) return res.status(400).send("Utilisateur avec un tel email a dejà été enregistré");

    //creation du nouvel utilisateur
    const newUser=new User({username,email,password});

    try {
        await newUser.save();
        //on génère le token de connexion
        generateToken(res,userExists._id);
        res.status(201).json({
            user:{
                ...newUser._doc,
                password:undefined
            }
        })
    } catch (error) {
        console.error("Erreur lors de l'inscription: ", error)
        res.status(400).json({message:error.message});
    }

})

//connexion 

export const signin=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    //verification des champs
    if(!email || !password) {
        throw new Error ("Renseillez tous les champs")
    }

    //verifiez si l'utilisateur exist

    const user=await User.findOne({email});

    if(user?.matchedPassword(password)){
        generateToken(res,user._id);
        res.status(201).json({
            success:true,
            message:"Utilisateur Connecté",
            user:{
                ...user._doc,
                password:undefined
            }
        })
    }else{
        res.status(401);
        throw new Error("Invalid credentials")
    }
});