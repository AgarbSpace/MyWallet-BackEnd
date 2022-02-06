import { Router } from "express";
import { login } from "../controllers/loginController.js"
import loginValidateSchemaMiddleware from "../middlewares/loginValidateSchemaMiddleware.js";


const loginRouter = Router();

loginRouter.post("/",loginValidateSchemaMiddleware, login)

export default loginRouter;