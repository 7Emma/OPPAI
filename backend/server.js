import express from 'express'
import dotenv from "dotenv"
import { connectDB } from './db/db.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()

//connecter mongo db

connectDB();

//creation de l'app
const app=express()


//les middleware

app.use(express.json()) //pour parser le JSON


//les routes
app.use("api/users",userRoutes)

//le server

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server runing on ${PORT}`)
})