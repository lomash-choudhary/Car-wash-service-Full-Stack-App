import { Router } from "express";
import { serverHealthCheckController } from "../controllers/serverHealth.controller";

const serverRouter = Router();

serverRouter.route("/check").get(serverHealthCheckController)

export default serverRouter