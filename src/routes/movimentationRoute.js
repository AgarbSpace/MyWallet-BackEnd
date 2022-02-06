import { Router } from "express";
import movimentationController from "../controllers/movimentationController.js";
import movimentationValidationMiddleware from "../middlewares/movimentationValidationMiddleware.js";
import { validateToken } from "../middlewares/validateToken.js";

const movimentationRoute = Router();

movimentationRoute.post("/movimentation", validateToken, movimentationValidationMiddleware, movimentationController);

export default movimentationRoute;