import { Router } from "express";
import { getInfo } from "../controllers/getInfoController.js"
import { validateToken } from "../middlewares/validateToken.js";

const getInfoRouter = Router()

getInfoRouter.get("/home",validateToken , getInfo)

export default getInfoRouter