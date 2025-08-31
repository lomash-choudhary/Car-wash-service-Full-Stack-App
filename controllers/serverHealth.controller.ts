import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";
import type { Request, Response } from "express";

const serverHealthCheckController = asyncHandler(
  async (req: Request, res: Response) => {
    res.status(200).json(
      new ApiResponse({
        data: {
            none:''
        },
        statusCode: 200,
        message: "Server is running fine and this is the v1 of the app",
      })
    );
  }
);

export { serverHealthCheckController };
