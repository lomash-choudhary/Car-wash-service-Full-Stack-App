import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //the default error value
  let statusCode = 500;
  let message = "Something went wrong";
  let error = [];
  let success = false;

  //check if the err which came is an instane of our ApiError class
  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
    error = err.error;
    success = err.success;
  }

  //return consistent json reponse
  return res.status(statusCode).json({
    success,
    message,
    error,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export { errorHandler };