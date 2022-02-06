import { Router } from "express";
import depositController from "../controllers/depositController.js";
import depositAndRetreatValidationMiddleware from "../middlewares/depositAndRetreatValidationMiddleware.js";
import { validateToken } from "../middlewares/validateToken.js";

const depositRoute = Router();

depositRoute.post("/deposit", validateToken, depositAndRetreatValidationMiddleware, depositController);

export default depositRoute;