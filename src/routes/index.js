import { Router } from "express";
import depositRoute from "./depositRoute.js";
import getInfoRouter from "./getInfoRouter.js";
import loginRouter from "./longinRouter.js";
import signUpRouter from "./signUpRouter.js";

const router = Router()

router.use(getInfoRouter);
router.use(loginRouter);
router.use(signUpRouter);
router.use(depositRoute);

export default router;