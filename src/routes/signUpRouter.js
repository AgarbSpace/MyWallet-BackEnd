import { Router } from "express";
import { signUp } from "../controllers/signUpController.js"
import signUpValidateSchemaMiddleware from "../middlewares/signUpValidateSchemaMiddleware.js";

const signUpRouter = Router()

signUpRouter.post("/signup",signUpValidateSchemaMiddleware, signUp)

export default signUpRouter;