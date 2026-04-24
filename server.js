import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import routerCrud from './routers/routerCrud.js'
import routerAuth from './routers/routerAuth.js'

const app = express()
dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api", routerCrud)
app.use("/auth", routerAuth)

async function startServer() {
    try{
        const PORT = process.env.PORT || 5005
        const DB_URL = process.env.DB_URL

        app.listen(PORT, () => {
            console.log(`server running in ${process.env.COMMON_URL + PORT}`)
        })
    }catch(e){
        throw new Error(e.message)
    }
}

startServer()