import { Request, Response,NextFunction } from "express";
import { CustomError } from "./CustomError";

export const errorHandler = (
  e: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (e instanceof CustomError) {
    return response.status(e.statusCode).json({
      message: e.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: `internal server error`,
  });
};
