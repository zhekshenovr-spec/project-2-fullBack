import { Router } from "express";

const routerCrud = Router()

routerCrud.get("/", (req, res) => {res.json({message:'crud'})})

export default routerCrud