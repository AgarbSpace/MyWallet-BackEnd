import { Router } from "express";
import getInfoRouter from "./getInfoRouter.js";
import loginRouter from "./longinRouter.js";
import movimentationRoute from "./movimentationRoute.js";
import signUpRouter from "./signUpRouter.js";

const router = Router()

router.use(getInfoRouter);
router.use(loginRouter);
router.use(signUpRouter);
router.use(movimentationRoute);

export default router;