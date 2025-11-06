import { Router } from "express";
import githubRouter from "./github.ts";

const router = Router();

router.use("/github", githubRouter);

export default router;
