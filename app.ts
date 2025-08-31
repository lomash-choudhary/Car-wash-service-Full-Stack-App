import dotenv from "dotenv"
dotenv.config(
    {
        path: "./.env"
    }
)
import cors from "cors"
import express from "express"
const app = express();
app.use(express.json())

app.use(cors(
  {
    origin: "*",
    credentials:true
  }
))


import serverRouter from "./routes/serverHealth.route";
import { errorHandler } from "./middlewares/errorHandler.middleware";

app.use("/api/v1/server", serverRouter)

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    errorHandler(err, req, res, next);
  }
);

export default app