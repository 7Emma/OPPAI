/* eslint-disable no-undef */
import jwt from "jsonwebtoken"

export const generateToken=(res,userId)=>{
    // eslint-disable-next-line no-undef
    const token=jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"30d"});

    //sauvegarder le token en cookie

    res.cookie("jwt",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV !== "developpement",
        sameSite:'strict',
        maxAge:30*24*60*60*1000
    })

    return token
}