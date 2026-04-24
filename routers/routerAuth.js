import { Router } from "express";

const routerAuth = Router()

routerAuth.get("/", (req, res) => {res.json({message:'auth'})})

export default routerAuth